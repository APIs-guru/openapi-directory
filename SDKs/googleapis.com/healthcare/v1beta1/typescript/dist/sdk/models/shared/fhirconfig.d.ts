import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
/**
 * Specifies how to handle de-identification of a FHIR store.
**/
export declare class FhirConfig extends SpeakeasyBase {
    defaultKeepExtensions?: boolean;
    fieldMetadataList?: FieldMetadata[];
}
