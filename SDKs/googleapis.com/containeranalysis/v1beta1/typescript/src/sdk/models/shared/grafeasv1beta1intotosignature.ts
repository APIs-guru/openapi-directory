import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrafeasV1beta1IntotoSignature
/** 
 * A signature object consists of the KeyID used and the signature itself.
**/
export class GrafeasV1beta1IntotoSignature extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyid" })
  keyid?: string;

  @Metadata({ data: "json, name=sig" })
  sig?: string;
}
