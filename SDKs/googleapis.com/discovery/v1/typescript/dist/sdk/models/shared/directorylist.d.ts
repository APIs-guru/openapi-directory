import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Links to 16x16 and 32x32 icons representing the API.
**/
export declare class DirectoryListItemsIcons extends SpeakeasyBase {
    x16?: string;
    x32?: string;
}
export declare class DirectoryListItems extends SpeakeasyBase {
    description?: string;
    discoveryLink?: string;
    discoveryRestUrl?: string;
    documentationLink?: string;
    icons?: DirectoryListItemsIcons;
    id?: string;
    kind?: string;
    labels?: string[];
    name?: string;
    preferred?: boolean;
    title?: string;
    version?: string;
}
export declare class DirectoryList extends SpeakeasyBase {
    discoveryVersion?: string;
    items?: DirectoryListItems[];
    kind?: string;
}
