import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitySelector
/** 
 * Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly.
**/
export class IdentitySelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: string;
}
