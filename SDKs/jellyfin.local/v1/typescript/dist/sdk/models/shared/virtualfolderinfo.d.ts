import { SpeakeasyBase } from "../../../internal/utils";
import { LibraryOptions } from "./libraryoptions";
/**
 * Used to hold information about a user's list of configured virtual folders.
**/
export declare class VirtualFolderInfo extends SpeakeasyBase {
    collectionType?: string;
    itemId?: string;
    libraryOptions?: LibraryOptions;
    locations?: string[];
    name?: string;
    primaryImageItemId?: string;
    refreshProgress?: number;
    refreshStatus?: string;
}
