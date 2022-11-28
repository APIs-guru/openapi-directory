import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimInventoryItemsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInventoryItemsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimInventoryItemsPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableInventoryItemInput;
}


export class DcimInventoryItemsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inventoryItem?: shared.InventoryItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
