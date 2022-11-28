import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceExecResource } from "./ospolicyresourceexecresource";
import { OsPolicyResourceFileResource } from "./ospolicyresourcefileresource";
import { OsPolicyResourcePackageResource } from "./ospolicyresourcepackageresource";
import { OsPolicyResourceRepositoryResource } from "./ospolicyresourcerepositoryresource";



// OsPolicyResource
/** 
 * An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
**/
export class OsPolicyResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exec" })
  exec?: OsPolicyResourceExecResource;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: OsPolicyResourceFileResource;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pkg" })
  pkg?: OsPolicyResourcePackageResource;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: OsPolicyResourceRepositoryResource;
}
