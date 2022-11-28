import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchedDeveloperMetadata } from "./matcheddevelopermetadata";



// SearchDeveloperMetadataResponse
/** 
 * A reply to a developer metadata search request.
**/
export class SearchDeveloperMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchedDeveloperMetadata", elemType: MatchedDeveloperMetadata })
  matchedDeveloperMetadata?: MatchedDeveloperMetadata[];
}
