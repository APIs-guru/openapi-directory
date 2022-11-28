import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateEphemeralCertRequest
/** 
 * Ephemeral certificate creation request.
**/
export class GenerateEphemeralCertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validDuration" })
  validDuration?: string;
}
