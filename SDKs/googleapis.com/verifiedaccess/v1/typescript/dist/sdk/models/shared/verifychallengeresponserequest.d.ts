import { SpeakeasyBase } from "../../../internal/utils";
import { SignedData } from "./signeddata";
/**
 * signed ChallengeResponse
**/
export declare class VerifyChallengeResponseRequest extends SpeakeasyBase {
    challengeResponse?: SignedData;
    expectedIdentity?: string;
}
