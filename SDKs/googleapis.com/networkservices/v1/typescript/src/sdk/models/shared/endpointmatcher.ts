import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EndpointMatcherMetadataLabelMatcher } from "./endpointmatchermetadatalabelmatcher";


// EndpointMatcher
/** 
 * A definition of a matcher that selects endpoints to which the policies should be applied.
**/
export class EndpointMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadataLabelMatcher" })
  metadataLabelMatcher?: EndpointMatcherMetadataLabelMatcher;
}
