import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeveloperMetadata } from "./developermetadata";


// CreateDeveloperMetadataResponse
/** 
 * The response from creating developer metadata.
**/
export class CreateDeveloperMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;
}
