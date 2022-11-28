import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";



// GenerateEphemeralCertResponse
/** 
 * Ephemeral certificate creation request.
**/
export class GenerateEphemeralCertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ephemeralCert" })
  ephemeralCert?: SslCert;
}
