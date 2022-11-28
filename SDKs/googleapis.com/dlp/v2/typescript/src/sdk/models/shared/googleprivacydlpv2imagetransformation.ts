import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Color } from "./googleprivacydlpv2color";
import { GooglePrivacyDlpV2SelectedInfoTypes } from "./googleprivacydlpv2selectedinfotypes";



// GooglePrivacyDlpV2ImageTransformation
/** 
 * Configuration for determining how redaction of images should occur.
**/
export class GooglePrivacyDlpV2ImageTransformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allInfoTypes" })
  allInfoTypes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=allText" })
  allText?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=redactionColor" })
  redactionColor?: GooglePrivacyDlpV2Color;

  @SpeakeasyMetadata({ data: "json, name=selectedInfoTypes" })
  selectedInfoTypes?: GooglePrivacyDlpV2SelectedInfoTypes;
}
