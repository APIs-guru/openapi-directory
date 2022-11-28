import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PkixPublicKey } from "./pkixpublickey";



// AttestorPublicKey
/** 
 * An attestor public key that will be used to verify attestations signed by this attestor.
**/
export class AttestorPublicKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asciiArmoredPgpPublicKey" })
  asciiArmoredPgpPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pkixPublicKey" })
  pkixPublicKey?: PkixPublicKey;
}
