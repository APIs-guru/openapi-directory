import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSessionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=activeWithinSeconds" })
  activeWithinSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=controllableByUserId" })
  controllableByUserId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: string;
}


export class GetSessionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSessionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSessionsQueryParams;

  @Metadata()
  security: GetSessionsSecurity;
}


export class GetSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SessionInfo })
  sessionInfos?: shared.SessionInfo[];

  @Metadata()
  statusCode: number;
}
