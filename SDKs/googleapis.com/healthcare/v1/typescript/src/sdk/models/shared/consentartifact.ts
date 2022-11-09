import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";
import { Signature } from "./signature";
import { Signature } from "./signature";
import { Signature } from "./signature";


// ConsentArtifact
/** 
 * Documentation of a user's consent.
**/
export class ConsentArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentContentScreenshots", elemType: shared.Image })
  consentContentScreenshots?: Image[];

  @Metadata({ data: "json, name=consentContentVersion" })
  consentContentVersion?: string;

  @Metadata({ data: "json, name=guardianSignature" })
  guardianSignature?: Signature;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userSignature" })
  userSignature?: Signature;

  @Metadata({ data: "json, name=witnessSignature" })
  witnessSignature?: Signature;
}
