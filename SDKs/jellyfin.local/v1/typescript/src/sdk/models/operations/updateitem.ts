import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UpdateItemRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  baseItemDto?: shared.BaseItemDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  baseItemDto1?: shared.BaseItemDtoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  baseItemDto2?: shared.BaseItemDtoInput;
}


export class UpdateItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateItemPathParams;

  @SpeakeasyMetadata()
  request: UpdateItemRequestsInput;

  @SpeakeasyMetadata()
  security: UpdateItemSecurity;
}


export class UpdateItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
