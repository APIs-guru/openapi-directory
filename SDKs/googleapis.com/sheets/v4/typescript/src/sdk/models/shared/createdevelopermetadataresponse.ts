import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadata } from "./developermetadata";



// CreateDeveloperMetadataResponse
/** 
 * The response from creating developer metadata.
**/
export class CreateDeveloperMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;
}
