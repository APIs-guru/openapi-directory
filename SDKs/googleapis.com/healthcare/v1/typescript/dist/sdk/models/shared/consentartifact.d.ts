import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Signature } from "./signature";
/**
 * Documentation of a user's consent.
**/
export declare class ConsentArtifact extends SpeakeasyBase {
    consentContentScreenshots?: Image[];
    consentContentVersion?: string;
    guardianSignature?: Signature;
    metadata?: Map<string, string>;
    name?: string;
    userId?: string;
    userSignature?: Signature;
    witnessSignature?: Signature;
}
