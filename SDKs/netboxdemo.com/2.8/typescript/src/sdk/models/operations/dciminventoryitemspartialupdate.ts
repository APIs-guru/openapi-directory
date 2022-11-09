import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInventoryItemsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInventoryItemsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInventoryItemsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInventoryItem;
}


export class DcimInventoryItemsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inventoryItem?: shared.InventoryItem;

  @Metadata()
  statusCode: number;
}
