import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
/**
 * Information related to the Google Cloud resource that is associated with this finding.
**/
export declare class Resource extends SpeakeasyBase {
    displayName?: string;
    folders?: Folder[];
    name?: string;
    parentDisplayName?: string;
    parentName?: string;
    projectDisplayName?: string;
    projectName?: string;
    type?: string;
}
