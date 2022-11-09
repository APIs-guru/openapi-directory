import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInventoryItemsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInventoryItem;
}


export class DcimInventoryItemsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inventoryItem?: shared.InventoryItem;

  @Metadata()
  statusCode: number;
}
