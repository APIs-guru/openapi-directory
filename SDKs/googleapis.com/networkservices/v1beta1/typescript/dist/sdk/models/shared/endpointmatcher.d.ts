import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataLabelMatcher } from "./metadatalabelmatcher";
/**
 * A definition of a matcher that selects endpoints to which the policies should be applied.
**/
export declare class EndpointMatcher extends SpeakeasyBase {
    metadataLabelMatcher?: MetadataLabelMatcher;
}
