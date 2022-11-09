import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PkixPublicKey } from "./pkixpublickey";


// AttestorPublicKey
/** 
 * An attestor public key that will be used to verify attestations signed by this attestor.
**/
export class AttestorPublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=asciiArmoredPgpPublicKey" })
  asciiArmoredPgpPublicKey?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=pkixPublicKey" })
  pkixPublicKey?: PkixPublicKey;
}
