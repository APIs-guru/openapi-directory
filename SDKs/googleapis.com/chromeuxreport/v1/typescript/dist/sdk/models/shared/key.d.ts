import { SpeakeasyBase } from "../../../internal/utils";
export declare enum KeyFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS",
    Phone = "PHONE",
    Desktop = "DESKTOP",
    Tablet = "TABLET"
}
/**
 * Key defines all the dimensions that identify this record as unique.
**/
export declare class Key extends SpeakeasyBase {
    effectiveConnectionType?: string;
    formFactor?: KeyFormFactorEnum;
    origin?: string;
    url?: string;
}
