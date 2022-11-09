import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplyWithGuidelines } from "./complywithguidelines";
import { Verify } from "./verify";
/**
 * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
**/
export declare class VoiceOfMerchantState extends SpeakeasyBase {
    complyWithGuidelines?: ComplyWithGuidelines;
    hasBusinessAuthority?: boolean;
    hasVoiceOfMerchant?: boolean;
    resolveOwnershipConflict?: Map<string, any>;
    verify?: Verify;
    waitForVoiceOfMerchant?: Map<string, any>;
}
