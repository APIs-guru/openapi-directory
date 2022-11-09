import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplyWithGuidelines } from "./complywithguidelines";
import { Verify } from "./verify";


// VoiceOfMerchantState
/** 
 * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
**/
export class VoiceOfMerchantState extends SpeakeasyBase {
  @Metadata({ data: "json, name=complyWithGuidelines" })
  complyWithGuidelines?: ComplyWithGuidelines;

  @Metadata({ data: "json, name=hasBusinessAuthority" })
  hasBusinessAuthority?: boolean;

  @Metadata({ data: "json, name=hasVoiceOfMerchant" })
  hasVoiceOfMerchant?: boolean;

  @Metadata({ data: "json, name=resolveOwnershipConflict" })
  resolveOwnershipConflict?: Map<string, any>;

  @Metadata({ data: "json, name=verify" })
  verify?: Verify;

  @Metadata({ data: "json, name=waitForVoiceOfMerchant" })
  waitForVoiceOfMerchant?: Map<string, any>;
}
