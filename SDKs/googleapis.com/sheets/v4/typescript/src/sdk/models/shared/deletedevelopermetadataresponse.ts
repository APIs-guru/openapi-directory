import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeveloperMetadata } from "./developermetadata";


// DeleteDeveloperMetadataResponse
/** 
 * The response from deleting developer metadata.
**/
export class DeleteDeveloperMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedDeveloperMetadata", elemType: shared.DeveloperMetadata })
  deletedDeveloperMetadata?: DeveloperMetadata[];
}
