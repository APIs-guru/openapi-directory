import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataLabels } from "./metadatalabels";

export enum MetadataLabelMatcherMetadataLabelMatchCriteriaEnum {
    MetadataLabelMatchCriteriaUnspecified = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
,    MatchAny = "MATCH_ANY"
,    MatchAll = "MATCH_ALL"
}


// MetadataLabelMatcher
/** 
 * The matcher that is based on node metadata presented by xDS clients.
**/
export class MetadataLabelMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadataLabelMatchCriteria" })
  metadataLabelMatchCriteria?: MetadataLabelMatcherMetadataLabelMatchCriteriaEnum;

  @Metadata({ data: "json, name=metadataLabels", elemType: shared.MetadataLabels })
  metadataLabels?: MetadataLabels[];
}
