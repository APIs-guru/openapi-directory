import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UpdateItemRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  baseItemDto?: shared.BaseItemDto;

  @Metadata({ data: "request, media_type=application/json" })
  baseItemDto1?: shared.BaseItemDto;

  @Metadata({ data: "request, media_type=text/json" })
  baseItemDto2?: shared.BaseItemDto;
}


export class UpdateItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateItemPathParams;

  @Metadata()
  request: UpdateItemRequests;

  @Metadata()
  security: UpdateItemSecurity;
}


export class UpdateItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
