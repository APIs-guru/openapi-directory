import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2Proximity
/** 
 * Message for specifying a window around a finding to apply a detection rule.
**/
export class GooglePrivacyDlpV2Proximity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=windowAfter" })
  windowAfter?: number;

  @SpeakeasyMetadata({ data: "json, name=windowBefore" })
  windowBefore?: number;
}
