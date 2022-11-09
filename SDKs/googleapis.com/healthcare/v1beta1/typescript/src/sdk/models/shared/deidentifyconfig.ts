import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnnotationConfig } from "./annotationconfig";
import { DicomConfig } from "./dicomconfig";
import { FhirConfig } from "./fhirconfig";
import { ImageConfig } from "./imageconfig";
import { DeidentifyOperationMetadata } from "./deidentifyoperationmetadata";
import { TextConfig } from "./textconfig";


// DeidentifyConfig
/** 
 * Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
**/
export class DeidentifyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotation" })
  annotation?: AnnotationConfig;

  @Metadata({ data: "json, name=dicom" })
  dicom?: DicomConfig;

  @Metadata({ data: "json, name=fhir" })
  fhir?: FhirConfig;

  @Metadata({ data: "json, name=image" })
  image?: ImageConfig;

  @Metadata({ data: "json, name=operationMetadata" })
  operationMetadata?: DeidentifyOperationMetadata;

  @Metadata({ data: "json, name=text" })
  text?: TextConfig;
}
