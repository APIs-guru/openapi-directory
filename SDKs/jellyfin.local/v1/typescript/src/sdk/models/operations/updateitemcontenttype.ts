import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateItemContentTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UpdateItemContentTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: string;
}


export class UpdateItemContentTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateItemContentTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateItemContentTypePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateItemContentTypeQueryParams;

  @SpeakeasyMetadata()
  security: UpdateItemContentTypeSecurity;
}


export class UpdateItemContentTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
