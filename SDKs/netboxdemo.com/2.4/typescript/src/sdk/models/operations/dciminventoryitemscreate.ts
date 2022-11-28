import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInventoryItemsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableInventoryItemInput;
}


export class DcimInventoryItemsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inventoryItem?: shared.InventoryItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
