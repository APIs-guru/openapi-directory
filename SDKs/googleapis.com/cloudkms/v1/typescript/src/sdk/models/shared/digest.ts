import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Digest
/** 
 * A Digest holds a cryptographic message digest.
**/
export class Digest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;

  @SpeakeasyMetadata({ data: "json, name=sha384" })
  sha384?: string;

  @SpeakeasyMetadata({ data: "json, name=sha512" })
  sha512?: string;
}
