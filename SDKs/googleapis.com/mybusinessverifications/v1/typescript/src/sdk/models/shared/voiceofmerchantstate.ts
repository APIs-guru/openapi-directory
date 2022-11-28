import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplyWithGuidelines } from "./complywithguidelines";
import { Verify } from "./verify";



// VoiceOfMerchantState
/** 
 * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
**/
export class VoiceOfMerchantState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complyWithGuidelines" })
  complyWithGuidelines?: ComplyWithGuidelines;

  @SpeakeasyMetadata({ data: "json, name=hasBusinessAuthority" })
  hasBusinessAuthority?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasVoiceOfMerchant" })
  hasVoiceOfMerchant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resolveOwnershipConflict" })
  resolveOwnershipConflict?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=verify" })
  verify?: Verify;

  @SpeakeasyMetadata({ data: "json, name=waitForVoiceOfMerchant" })
  waitForVoiceOfMerchant?: Map<string, any>;
}
