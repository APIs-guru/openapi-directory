import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TaxSettingsUpdateRequestTaxationModeEnum {
    Exclusive = "EXCLUSIVE",
    Inclusive = "INCLUSIVE"
}
export declare class TaxSettingsUpdateRequest extends SpeakeasyBase {
    taxationMode: TaxSettingsUpdateRequestTaxationModeEnum;
}
