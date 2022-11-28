import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointMatcherMetadataLabelMatcherMetadataLabels
/** 
 * Defines a name-pair value for a single label.
**/
export class EndpointMatcherMetadataLabelMatcherMetadataLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelName" })
  labelName?: string;

  @SpeakeasyMetadata({ data: "json, name=labelValue" })
  labelValue?: string;
}
