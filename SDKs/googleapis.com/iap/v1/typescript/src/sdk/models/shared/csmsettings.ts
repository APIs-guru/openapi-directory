import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CsmSettings
/** 
 * Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly.
**/
export class CsmSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=rctokenAud" })
  rctokenAud?: string;
}
