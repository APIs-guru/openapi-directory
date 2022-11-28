import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DicomConfig } from "./dicomconfig";
import { FhirConfig } from "./fhirconfig";
import { ImageConfig } from "./imageconfig";
import { TextConfig } from "./textconfig";



// DeidentifyConfig
/** 
 * Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
**/
export class DeidentifyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dicom" })
  dicom?: DicomConfig;

  @SpeakeasyMetadata({ data: "json, name=fhir" })
  fhir?: FhirConfig;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageConfig;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: TextConfig;
}
