import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the FHIR paths to match and how to handle the de-identification of matching fields.
**/
export declare class GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata extends SpeakeasyBase {
    characterMaskField?: Map<string, any>;
    cleanTextField?: Map<string, any>;
    cryptoHashField?: Map<string, any>;
    dateShiftField?: Map<string, any>;
    keepField?: Map<string, any>;
    paths?: string[];
    removeField?: Map<string, any>;
}
