import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceAccessControl
/** 
 * The access controls set on the resource.
**/
export class ResourceAccessControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcpIamPolicy" })
  gcpIamPolicy?: string;
}
