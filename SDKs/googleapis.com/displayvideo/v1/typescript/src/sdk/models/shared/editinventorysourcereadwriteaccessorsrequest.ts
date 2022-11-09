import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate } from "./editinventorysourcereadwriteaccessorsrequestadvertisersupdate";


// EditInventorySourceReadWriteAccessorsRequest
/** 
 * Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
**/
export class EditInventorySourceReadWriteAccessorsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisersUpdate" })
  advertisersUpdate?: EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate;

  @Metadata({ data: "json, name=assignPartner" })
  assignPartner?: boolean;

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
