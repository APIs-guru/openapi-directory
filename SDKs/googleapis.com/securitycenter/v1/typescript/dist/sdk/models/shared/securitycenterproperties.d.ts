import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
**/
export declare class SecurityCenterProperties extends SpeakeasyBase {
    folders?: Folder[];
    resourceDisplayName?: string;
    resourceName?: string;
    resourceOwners?: string[];
    resourceParent?: string;
    resourceParentDisplayName?: string;
    resourceProject?: string;
    resourceProjectDisplayName?: string;
    resourceType?: string;
}
