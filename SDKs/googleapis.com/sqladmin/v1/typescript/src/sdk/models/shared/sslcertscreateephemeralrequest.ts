import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SslCertsCreateEphemeralRequest
/** 
 * SslCerts create ephemeral certificate request.
**/
export class SslCertsCreateEphemeralRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}
