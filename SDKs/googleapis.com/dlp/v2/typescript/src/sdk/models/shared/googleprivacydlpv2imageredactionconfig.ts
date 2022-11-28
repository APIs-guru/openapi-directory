import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Color } from "./googleprivacydlpv2color";



// GooglePrivacyDlpV2ImageRedactionConfig
/** 
 * Configuration for determining how redaction of images should occur.
**/
export class GooglePrivacyDlpV2ImageRedactionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;

  @SpeakeasyMetadata({ data: "json, name=redactAllText" })
  redactAllText?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redactionColor" })
  redactionColor?: GooglePrivacyDlpV2Color;
}
