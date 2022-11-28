import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInventoryItemsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInventoryItemsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInventoryItemsReadPathParams;
}


export class DcimInventoryItemsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inventoryItem?: shared.InventoryItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
