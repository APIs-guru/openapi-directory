import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeveloperMetadata } from "./developermetadata";


// CreateDeveloperMetadataRequest
/** 
 * A request to create developer metadata.
**/
export class CreateDeveloperMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;
}
