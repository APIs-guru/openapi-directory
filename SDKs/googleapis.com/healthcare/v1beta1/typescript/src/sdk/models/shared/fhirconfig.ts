import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldMetadata } from "./fieldmetadata";


// FhirConfig
/** 
 * Specifies how to handle de-identification of a FHIR store.
**/
export class FhirConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultKeepExtensions" })
  defaultKeepExtensions?: boolean;

  @Metadata({ data: "json, name=fieldMetadataList", elemType: shared.FieldMetadata })
  fieldMetadataList?: FieldMetadata[];
}
