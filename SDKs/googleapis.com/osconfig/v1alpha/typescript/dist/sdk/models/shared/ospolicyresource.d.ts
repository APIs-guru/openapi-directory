import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceExecResource } from "./ospolicyresourceexecresource";
import { OsPolicyResourceFileResource } from "./ospolicyresourcefileresource";
import { OsPolicyResourcePackageResource } from "./ospolicyresourcepackageresource";
import { OsPolicyResourceRepositoryResource } from "./ospolicyresourcerepositoryresource";
/**
 * An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
**/
export declare class OsPolicyResource extends SpeakeasyBase {
    exec?: OsPolicyResourceExecResource;
    file?: OsPolicyResourceFileResource;
    id?: string;
    pkg?: OsPolicyResourcePackageResource;
    repository?: OsPolicyResourceRepositoryResource;
}
