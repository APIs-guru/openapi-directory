import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityConfig
/** 
 * Identity related configuration, including service account based secure multi-tenancy user mappings.
**/
export class IdentityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userServiceAccountMapping" })
  userServiceAccountMapping?: Map<string, string>;
}
