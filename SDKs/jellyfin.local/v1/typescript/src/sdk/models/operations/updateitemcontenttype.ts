import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateItemContentTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UpdateItemContentTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: string;
}


export class UpdateItemContentTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateItemContentTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateItemContentTypePathParams;

  @Metadata()
  queryParams: UpdateItemContentTypeQueryParams;

  @Metadata()
  security: UpdateItemContentTypeSecurity;
}


export class UpdateItemContentTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
