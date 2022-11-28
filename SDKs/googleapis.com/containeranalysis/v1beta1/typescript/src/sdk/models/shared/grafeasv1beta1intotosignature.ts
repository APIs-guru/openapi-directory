import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrafeasV1beta1IntotoSignature
/** 
 * A signature object consists of the KeyID used and the signature itself.
**/
export class GrafeasV1beta1IntotoSignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyid" })
  keyid?: string;

  @SpeakeasyMetadata({ data: "json, name=sig" })
  sig?: string;
}
