import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PlayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class PlayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemIds" })
  itemIds: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playCommand" })
  playCommand: shared.PlayCommandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startPositionTicks" })
  startPositionTicks?: number;
}


export class PlaySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PlayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PlayPathParams;

  @SpeakeasyMetadata()
  queryParams: PlayQueryParams;

  @SpeakeasyMetadata()
  security: PlaySecurity;
}


export class PlayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
