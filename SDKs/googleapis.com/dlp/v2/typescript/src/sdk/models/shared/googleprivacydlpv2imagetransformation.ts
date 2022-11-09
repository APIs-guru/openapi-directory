import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Color } from "./googleprivacydlpv2color";
import { GooglePrivacyDlpV2SelectedInfoTypes } from "./googleprivacydlpv2selectedinfotypes";


// GooglePrivacyDlpV2ImageTransformation
/** 
 * Configuration for determining how redaction of images should occur.
**/
export class GooglePrivacyDlpV2ImageTransformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=allInfoTypes" })
  allInfoTypes?: Map<string, any>;

  @Metadata({ data: "json, name=allText" })
  allText?: Map<string, any>;

  @Metadata({ data: "json, name=redactionColor" })
  redactionColor?: GooglePrivacyDlpV2Color;

  @Metadata({ data: "json, name=selectedInfoTypes" })
  selectedInfoTypes?: GooglePrivacyDlpV2SelectedInfoTypes;
}
