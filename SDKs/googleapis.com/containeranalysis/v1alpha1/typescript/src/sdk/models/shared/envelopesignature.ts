import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnvelopeSignature
/** 
 * A DSSE signature
**/
export class EnvelopeSignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid?: string;

  @SpeakeasyMetadata({ data: "json, name=sig" })
  sig?: string;
}
