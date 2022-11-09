import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeveloperMetadata } from "./developermetadata";


// UpdateDeveloperMetadataResponse
/** 
 * The response from updating developer metadata.
**/
export class UpdateDeveloperMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerMetadata", elemType: shared.DeveloperMetadata })
  developerMetadata?: DeveloperMetadata[];
}
