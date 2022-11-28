import { SpeakeasyBase } from "../../../internal/utils";
import { PkixPublicKey } from "./pkixpublickey";
/**
 * An attestor public key that will be used to verify attestations signed by this attestor.
**/
export declare class AttestorPublicKey extends SpeakeasyBase {
    asciiArmoredPgpPublicKey?: string;
    comment?: string;
    id?: string;
    pkixPublicKey?: PkixPublicKey;
}
