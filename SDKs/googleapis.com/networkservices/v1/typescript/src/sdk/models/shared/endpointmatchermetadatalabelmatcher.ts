import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointMatcherMetadataLabelMatcherMetadataLabels } from "./endpointmatchermetadatalabelmatchermetadatalabels";

export enum EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum {
    MetadataLabelMatchCriteriaUnspecified = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED"
,    MatchAny = "MATCH_ANY"
,    MatchAll = "MATCH_ALL"
}


// EndpointMatcherMetadataLabelMatcher
/** 
 * The matcher that is based on node metadata presented by xDS clients.
**/
export class EndpointMatcherMetadataLabelMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadataLabelMatchCriteria" })
  metadataLabelMatchCriteria?: EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum;

  @Metadata({ data: "json, name=metadataLabels", elemType: shared.EndpointMatcherMetadataLabelMatcherMetadataLabels })
  metadataLabels?: EndpointMatcherMetadataLabelMatcherMetadataLabels[];
}
