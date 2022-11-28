import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
import { FhirNotificationConfig } from "./fhirnotificationconfig";
import { SearchConfig } from "./searchconfig";
import { StreamConfig } from "./streamconfig";
import { ValidationConfig } from "./validationconfig";
export declare enum FhirStoreComplexDataTypeReferenceParsingEnum {
    ComplexDataTypeReferenceParsingUnspecified = "COMPLEX_DATA_TYPE_REFERENCE_PARSING_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
export declare enum FhirStoreVersionEnum {
    VersionUnspecified = "VERSION_UNSPECIFIED",
    Dstu2 = "DSTU2",
    Stu3 = "STU3",
    R4 = "R4"
}
/**
 * Represents a FHIR store.
**/
export declare class FhirStore extends SpeakeasyBase {
    complexDataTypeReferenceParsing?: FhirStoreComplexDataTypeReferenceParsingEnum;
    defaultSearchHandlingStrict?: boolean;
    disableReferentialIntegrity?: boolean;
    disableResourceVersioning?: boolean;
    enableUpdateCreate?: boolean;
    labels?: Map<string, string>;
    name?: string;
    notificationConfig?: NotificationConfig;
    notificationConfigs?: FhirNotificationConfig[];
    searchConfig?: SearchConfig;
    streamConfigs?: StreamConfig[];
    validationConfig?: ValidationConfig;
    version?: FhirStoreVersionEnum;
}
