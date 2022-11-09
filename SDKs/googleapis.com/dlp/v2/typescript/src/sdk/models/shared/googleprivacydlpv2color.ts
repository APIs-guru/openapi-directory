import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2Color
/** 
 * Represents a color in the RGB color space.
**/
export class GooglePrivacyDlpV2Color extends SpeakeasyBase {
  @Metadata({ data: "json, name=blue" })
  blue?: number;

  @Metadata({ data: "json, name=green" })
  green?: number;

  @Metadata({ data: "json, name=red" })
  red?: number;
}
