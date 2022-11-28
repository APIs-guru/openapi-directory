import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointMatcherMetadataLabelMatcherMetadataLabels } from "./endpointmatchermetadatalabelmatchermetadatalabels";


export enum EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum {
    MetadataLabelMatchCriteriaUnspecified = "METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED",
    MatchAny = "MATCH_ANY",
    MatchAll = "MATCH_ALL"
}


// EndpointMatcherMetadataLabelMatcher
/** 
 * The matcher that is based on node metadata presented by xDS clients.
**/
export class EndpointMatcherMetadataLabelMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadataLabelMatchCriteria" })
  metadataLabelMatchCriteria?: EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteriaEnum;

  @SpeakeasyMetadata({ data: "json, name=metadataLabels", elemType: EndpointMatcherMetadataLabelMatcherMetadataLabels })
  metadataLabels?: EndpointMatcherMetadataLabelMatcherMetadataLabels[];
}
