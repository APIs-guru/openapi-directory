import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataLabels } from "./metadatalabels";


export enum MetadataLabelMatcherMetadataLabelMatchCriteriaEnum {
    MetadataLabelMatchCriteriaUnspecified = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
    MatchAny = "MATCH_ANY",
    MatchAll = "MATCH_ALL"
}


// MetadataLabelMatcher
/** 
 * The matcher that is based on node metadata presented by xDS clients.
**/
export class MetadataLabelMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadataLabelMatchCriteria" })
  metadataLabelMatchCriteria?: MetadataLabelMatcherMetadataLabelMatchCriteriaEnum;

  @SpeakeasyMetadata({ data: "json, name=metadataLabels", elemType: MetadataLabels })
  metadataLabels?: MetadataLabels[];
}
