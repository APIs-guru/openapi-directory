import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceAccessControl
/** 
 * The access controls set on the resource.
**/
export class ResourceAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcpIamPolicy" })
  gcpIamPolicy?: string;
}
