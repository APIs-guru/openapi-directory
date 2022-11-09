import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScheduleDeleteCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
**/
export class ScheduleDeleteCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreActiveCertificates" })
  ignoreActiveCertificates?: boolean;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
