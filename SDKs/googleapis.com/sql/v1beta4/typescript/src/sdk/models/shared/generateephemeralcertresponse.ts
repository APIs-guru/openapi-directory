import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslCert } from "./sslcert";


// GenerateEphemeralCertResponse
/** 
 * Ephemeral certificate creation request.
**/
export class GenerateEphemeralCertResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ephemeralCert" })
  ephemeralCert?: SslCert;
}
