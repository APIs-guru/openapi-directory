import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FetchCaCertsRequest
/** 
 * Request message for CertificateAuthorityService.FetchCaCerts.
**/
export class FetchCaCertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
