import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisplayContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class DisplayContentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemName" })
  itemName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemType" })
  itemType: string;
}


export class DisplayContentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DisplayContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisplayContentPathParams;

  @Metadata()
  queryParams: DisplayContentQueryParams;

  @Metadata()
  security: DisplayContentSecurity;
}


export class DisplayContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
