import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadata } from "./developermetadata";



// CreateDeveloperMetadataRequest
/** 
 * A request to create developer metadata.
**/
export class CreateDeveloperMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerMetadata" })
  developerMetadata?: DeveloperMetadata;
}
