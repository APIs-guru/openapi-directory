import { SpeakeasyBase } from "../../../internal/utils";
import { SignedData } from "./signeddata";
/**
 * Result message for VerifiedAccess.CreateChallenge.
**/
export declare class Challenge extends SpeakeasyBase {
    alternativeChallenge?: SignedData;
    challenge?: SignedData;
}
