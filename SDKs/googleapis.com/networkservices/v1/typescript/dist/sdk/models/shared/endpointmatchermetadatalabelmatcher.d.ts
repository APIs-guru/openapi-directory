import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointMatcherMetadataLabelMatcherMetadataLabels } from "./endpointmatchermetadatalabelmatchermetadatalabels";
export declare enum EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum {
    MetadataLabelMatchCriteriaUnspecified = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
    MatchAny = "MATCH_ANY",
    MatchAll = "MATCH_ALL"
}
/**
 * The matcher that is based on node metadata presented by xDS clients.
**/
export declare class EndpointMatcherMetadataLabelMatcher extends SpeakeasyBase {
    metadataLabelMatchCriteria?: EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
    metadataLabels?: EndpointMatcherMetadataLabelMatcherMetadataLabels[];
}
