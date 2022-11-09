import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2Proximity
/** 
 * Message for specifying a window around a finding to apply a detection rule.
**/
export class GooglePrivacyDlpV2Proximity extends SpeakeasyBase {
  @Metadata({ data: "json, name=windowAfter" })
  windowAfter?: number;

  @Metadata({ data: "json, name=windowBefore" })
  windowBefore?: number;
}
