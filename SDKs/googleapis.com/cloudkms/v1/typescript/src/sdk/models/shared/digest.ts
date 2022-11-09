import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Digest
/** 
 * A Digest holds a cryptographic message digest.
**/
export class Digest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha256" })
  sha256?: string;

  @Metadata({ data: "json, name=sha384" })
  sha384?: string;

  @Metadata({ data: "json, name=sha512" })
  sha512?: string;
}
