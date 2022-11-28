import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataLabels } from "./metadatalabels";
export declare enum MetadataLabelMatcherMetadataLabelMatchCriteriaEnum {
    MetadataLabelMatchCriteriaUnspecified = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
    MatchAny = "MATCH_ANY",
    MatchAll = "MATCH_ALL"
}
/**
 * The matcher that is based on node metadata presented by xDS clients.
**/
export declare class MetadataLabelMatcher extends SpeakeasyBase {
    metadataLabelMatchCriteria?: MetadataLabelMatcherMetadataLabelMatchCriteriaEnum;
    metadataLabels?: MetadataLabels[];
}
