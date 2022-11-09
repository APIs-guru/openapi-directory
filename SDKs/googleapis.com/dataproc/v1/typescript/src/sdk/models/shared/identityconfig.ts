import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityConfig
/** 
 * Identity related configuration, including service account based secure multi-tenancy user mappings.
**/
export class IdentityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=userServiceAccountMapping" })
  userServiceAccountMapping?: Map<string, string>;
}
