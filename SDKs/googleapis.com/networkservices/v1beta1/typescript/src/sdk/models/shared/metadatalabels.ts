import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetadataLabels
/** 
 * Defines a name-pair value for a single label.
**/
export class MetadataLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelName" })
  labelName?: string;

  @Metadata({ data: "json, name=labelValue" })
  labelValue?: string;
}
