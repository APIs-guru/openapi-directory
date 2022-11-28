import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";



// FhirConfig
/** 
 * Specifies how to handle de-identification of a FHIR store.
**/
export class FhirConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultKeepExtensions" })
  defaultKeepExtensions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fieldMetadataList", elemType: FieldMetadata })
  fieldMetadataList?: FieldMetadata[];
}
