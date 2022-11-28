import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadata } from "./developermetadata";



// UpdateDeveloperMetadataResponse
/** 
 * The response from updating developer metadata.
**/
export class UpdateDeveloperMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerMetadata", elemType: DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];
}
