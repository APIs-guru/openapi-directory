import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkloadCertificates
/** 
 * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
**/
export class WorkloadCertificates extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableCertificates" })
  enableCertificates?: boolean;
}
