import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateItemImageIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" })
  imageIndex: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class UpdateItemImageIndexQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newIndex" })
  newIndex?: number;
}


export class UpdateItemImageIndexSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateItemImageIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateItemImageIndexPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateItemImageIndexQueryParams;

  @SpeakeasyMetadata()
  security: UpdateItemImageIndexSecurity;
}


export class UpdateItemImageIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
