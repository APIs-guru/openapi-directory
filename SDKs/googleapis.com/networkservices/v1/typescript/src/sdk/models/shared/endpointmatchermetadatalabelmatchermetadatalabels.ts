import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointMatcherMetadataLabelMatcherMetadataLabels
/** 
 * Defines a name-pair value for a single label.
**/
export class EndpointMatcherMetadataLabelMatcherMetadataLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelName" })
  labelName?: string;

  @Metadata({ data: "json, name=labelValue" })
  labelValue?: string;
}
