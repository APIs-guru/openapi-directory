import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ephemeral certificate creation request.
**/
export declare class GenerateEphemeralCertRequest extends SpeakeasyBase {
    accessToken?: string;
    publicKey?: string;
    readTime?: string;
    validDuration?: string;
}
