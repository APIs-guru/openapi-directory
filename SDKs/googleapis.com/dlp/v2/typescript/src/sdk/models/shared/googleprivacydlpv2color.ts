import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2Color
/** 
 * Represents a color in the RGB color space.
**/
export class GooglePrivacyDlpV2Color extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blue" })
  blue?: number;

  @SpeakeasyMetadata({ data: "json, name=green" })
  green?: number;

  @SpeakeasyMetadata({ data: "json, name=red" })
  red?: number;
}
