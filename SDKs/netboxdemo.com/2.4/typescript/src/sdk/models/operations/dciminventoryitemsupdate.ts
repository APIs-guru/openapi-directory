import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInventoryItemsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInventoryItemsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInventoryItemsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInventoryItem;
}


export class DcimInventoryItemsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inventoryItem?: shared.InventoryItem;

  @Metadata()
  statusCode: number;
}
