import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2LabelProperties
/** 
 * Basic properties of the label.
**/
export class GoogleAppsDriveLabelsV2LabelProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
