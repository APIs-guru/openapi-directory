import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SasPortalNrqzValidationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Final = "FINAL"
}
/**
 * Information about National Radio Quiet Zone validation.
**/
export declare class SasPortalNrqzValidation extends SpeakeasyBase {
    caseId?: string;
    cpiId?: string;
    latitude?: number;
    longitude?: number;
    state?: SasPortalNrqzValidationStateEnum;
}
