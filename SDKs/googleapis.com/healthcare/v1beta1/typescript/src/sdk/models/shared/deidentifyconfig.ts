import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationConfig } from "./annotationconfig";
import { DicomConfig } from "./dicomconfig";
import { DicomTagConfig } from "./dicomtagconfig";
import { FhirConfig } from "./fhirconfig";
import { FhirFieldConfig } from "./fhirfieldconfig";
import { ImageConfig } from "./imageconfig";
import { DeidentifyOperationMetadata } from "./deidentifyoperationmetadata";
import { TextConfig } from "./textconfig";



// DeidentifyConfig
/** 
 * Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
**/
export class DeidentifyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation" })
  annotation?: AnnotationConfig;

  @SpeakeasyMetadata({ data: "json, name=dicom" })
  dicom?: DicomConfig;

  @SpeakeasyMetadata({ data: "json, name=dicomTagConfig" })
  dicomTagConfig?: DicomTagConfig;

  @SpeakeasyMetadata({ data: "json, name=fhir" })
  fhir?: FhirConfig;

  @SpeakeasyMetadata({ data: "json, name=fhirFieldConfig" })
  fhirFieldConfig?: FhirFieldConfig;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageConfig;

  @SpeakeasyMetadata({ data: "json, name=operationMetadata" })
  operationMetadata?: DeidentifyOperationMetadata;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: TextConfig;
}
