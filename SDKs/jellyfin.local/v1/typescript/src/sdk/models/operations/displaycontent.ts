import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisplayContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class DisplayContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemName" })
  itemName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemType" })
  itemType: string;
}


export class DisplayContentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DisplayContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisplayContentPathParams;

  @SpeakeasyMetadata()
  queryParams: DisplayContentQueryParams;

  @SpeakeasyMetadata()
  security: DisplayContentSecurity;
}


export class DisplayContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
