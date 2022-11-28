import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduleDeleteCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
**/
export class ScheduleDeleteCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreActiveCertificates" })
  ignoreActiveCertificates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
