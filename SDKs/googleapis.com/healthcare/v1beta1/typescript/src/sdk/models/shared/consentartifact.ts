import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Signature } from "./signature";



// ConsentArtifact
/** 
 * Documentation of a user's consent.
**/
export class ConsentArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentContentScreenshots", elemType: Image })
  consentContentScreenshots?: Image[];

  @SpeakeasyMetadata({ data: "json, name=consentContentVersion" })
  consentContentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=guardianSignature" })
  guardianSignature?: Signature;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userSignature" })
  userSignature?: Signature;

  @SpeakeasyMetadata({ data: "json, name=witnessSignature" })
  witnessSignature?: Signature;
}
