import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperMetadata } from "./developermetadata";



// DeleteDeveloperMetadataResponse
/** 
 * The response from deleting developer metadata.
**/
export class DeleteDeveloperMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedDeveloperMetadata", elemType: DeveloperMetadata })
  deletedDeveloperMetadata?: DeveloperMetadata[];
}
