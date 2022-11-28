import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate } from "./editinventorysourcereadwriteaccessorsrequestadvertisersupdate";



// EditInventorySourceReadWriteAccessorsRequest
/** 
 * Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
**/
export class EditInventorySourceReadWriteAccessorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisersUpdate" })
  advertisersUpdate?: EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate;

  @SpeakeasyMetadata({ data: "json, name=assignPartner" })
  assignPartner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
