import { SpeakeasyBase } from "../../../internal/utils";
import { EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate } from "./editinventorysourcereadwriteaccessorsrequestadvertisersupdate";
/**
 * Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.
**/
export declare class EditInventorySourceReadWriteAccessorsRequest extends SpeakeasyBase {
    advertisersUpdate?: EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate;
    assignPartner?: boolean;
    partnerId?: string;
}
