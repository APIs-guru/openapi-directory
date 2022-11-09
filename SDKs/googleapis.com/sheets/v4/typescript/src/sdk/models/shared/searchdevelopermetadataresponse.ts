import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchedDeveloperMetadata } from "./matcheddevelopermetadata";


// SearchDeveloperMetadataResponse
/** 
 * A reply to a developer metadata search request.
**/
export class SearchDeveloperMetadataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchedDeveloperMetadata", elemType: shared.MatchedDeveloperMetadata })
  matchedDeveloperMetadata?: MatchedDeveloperMetadata[];
}
