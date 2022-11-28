import { SpeakeasyBase } from "../../../internal/utils";
import { DicomConfig } from "./dicomconfig";
import { FhirConfig } from "./fhirconfig";
import { ImageConfig } from "./imageconfig";
import { TextConfig } from "./textconfig";
/**
 * Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
**/
export declare class DeidentifyConfig extends SpeakeasyBase {
    dicom?: DicomConfig;
    fhir?: FhirConfig;
    image?: ImageConfig;
    text?: TextConfig;
}
