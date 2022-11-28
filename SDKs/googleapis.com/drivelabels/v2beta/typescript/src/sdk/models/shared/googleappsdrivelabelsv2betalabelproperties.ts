import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaLabelProperties
/** 
 * Basic properties of the label.
**/
export class GoogleAppsDriveLabelsV2betaLabelProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
