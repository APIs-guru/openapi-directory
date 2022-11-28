import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemListByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetItemListByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemListByIdPathParams;
}


export class GetItemListByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemList?: shared.ItemList;

  @SpeakeasyMetadata()
  statusCode: number;
}
