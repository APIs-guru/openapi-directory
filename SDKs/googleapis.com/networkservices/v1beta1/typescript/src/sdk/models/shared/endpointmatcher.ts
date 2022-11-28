import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataLabelMatcher } from "./metadatalabelmatcher";



// EndpointMatcher
/** 
 * A definition of a matcher that selects endpoints to which the policies should be applied.
**/
export class EndpointMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadataLabelMatcher" })
  metadataLabelMatcher?: MetadataLabelMatcher;
}
