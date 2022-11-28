import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSessionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeWithinSeconds" })
  activeWithinSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=controllableByUserId" })
  controllableByUserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: string;
}


export class GetSessionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSessionsQueryParams;

  @SpeakeasyMetadata()
  security: GetSessionsSecurity;
}


export class GetSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SessionInfo })
  sessionInfos?: shared.SessionInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
