import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeshCertificates
/** 
 * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
**/
export class MeshCertificates extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableCertificates" })
  enableCertificates?: boolean;
}
