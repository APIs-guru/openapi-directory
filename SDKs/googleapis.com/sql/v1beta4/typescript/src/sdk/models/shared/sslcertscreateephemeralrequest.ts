import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SslCertsCreateEphemeralRequest
/** 
 * SslCerts create ephemeral certificate request.
**/
export class SslCertsCreateEphemeralRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}
