import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInventoryItemsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInventoryItemsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInventoryItemsReadPathParams;
}


export class DcimInventoryItemsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inventoryItem?: shared.InventoryItem;

  @Metadata()
  statusCode: number;
}
