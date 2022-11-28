import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.
**/
export declare class EditGuaranteedOrderReadAccessorsRequest extends SpeakeasyBase {
    addedAdvertisers?: string[];
    partnerId?: string;
    readAccessInherited?: boolean;
    removedAdvertisers?: string[];
}
