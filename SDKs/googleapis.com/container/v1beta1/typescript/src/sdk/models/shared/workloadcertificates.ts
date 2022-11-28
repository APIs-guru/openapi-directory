import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkloadCertificates
/** 
 * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
**/
export class WorkloadCertificates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableCertificates" })
  enableCertificates?: boolean;
}
