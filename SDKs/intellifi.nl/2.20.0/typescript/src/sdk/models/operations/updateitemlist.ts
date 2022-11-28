import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateItemListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateItemListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateItemListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ItemListInput;
}


export class UpdateItemListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
