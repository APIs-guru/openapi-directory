import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeshCertificates
/** 
 * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
**/
export class MeshCertificates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableCertificates" })
  enableCertificates?: boolean;
}
