import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateItemImageIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" })
  imageIndex: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UpdateItemImageIndexQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=newIndex" })
  newIndex?: number;
}


export class UpdateItemImageIndexSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateItemImageIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateItemImageIndexPathParams;

  @Metadata()
  queryParams: UpdateItemImageIndexQueryParams;

  @Metadata()
  security: UpdateItemImageIndexSecurity;
}


export class UpdateItemImageIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
