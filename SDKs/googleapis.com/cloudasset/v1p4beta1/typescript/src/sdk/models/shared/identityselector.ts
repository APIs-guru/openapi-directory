import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitySelector
/** 
 * Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly.
**/
export class IdentitySelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;
}
