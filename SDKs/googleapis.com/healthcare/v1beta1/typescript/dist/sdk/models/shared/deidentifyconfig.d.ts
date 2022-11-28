import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationConfig } from "./annotationconfig";
import { DicomConfig } from "./dicomconfig";
import { DicomTagConfig } from "./dicomtagconfig";
import { FhirConfig } from "./fhirconfig";
import { FhirFieldConfig } from "./fhirfieldconfig";
import { ImageConfig } from "./imageconfig";
import { DeidentifyOperationMetadata } from "./deidentifyoperationmetadata";
import { TextConfig } from "./textconfig";
/**
 * Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
**/
export declare class DeidentifyConfig extends SpeakeasyBase {
    annotation?: AnnotationConfig;
    dicom?: DicomConfig;
    dicomTagConfig?: DicomTagConfig;
    fhir?: FhirConfig;
    fhirFieldConfig?: FhirFieldConfig;
    image?: ImageConfig;
    operationMetadata?: DeidentifyOperationMetadata;
    text?: TextConfig;
}
