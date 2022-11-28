import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.
**/
export declare class DsseHint extends SpeakeasyBase {
    humanReadableName?: string;
}
