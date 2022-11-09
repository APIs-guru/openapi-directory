import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateEphemeralCertRequest
/** 
 * Ephemeral certificate creation request.
**/
export class GenerateEphemeralCertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=validDuration" })
  validDuration?: string;
}
