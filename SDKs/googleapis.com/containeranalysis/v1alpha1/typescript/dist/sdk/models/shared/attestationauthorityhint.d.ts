import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This submessage provides human-readable hints about the purpose of the AttestationAuthority. Because the name of a Note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should NOT be used to look up AttestationAuthorities in security sensitive contexts, such as when looking up Attestations to verify.
**/
export declare class AttestationAuthorityHint extends SpeakeasyBase {
    humanReadableName?: string;
}
