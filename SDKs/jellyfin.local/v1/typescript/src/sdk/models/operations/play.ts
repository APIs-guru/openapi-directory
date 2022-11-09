import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PlayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class PlayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=itemIds" })
  itemIds: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=playCommand" })
  playCommand: shared.PlayCommandEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startPositionTicks" })
  startPositionTicks?: number;
}


export class PlaySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PlayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PlayPathParams;

  @Metadata()
  queryParams: PlayQueryParams;

  @Metadata()
  security: PlaySecurity;
}


export class PlayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
