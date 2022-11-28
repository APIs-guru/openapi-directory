import { SpeakeasyBase } from "../../../internal/utils";
import { ScrollDirectionEnum } from "./scrolldirectionenum";
import { SortOrderEnum } from "./sortorderenum";
/**
 * Defines the display preferences for any item that supports them (usually Folders).
**/
export declare class DisplayPreferencesDto extends SpeakeasyBase {
    client?: string;
    customPrefs?: Map<string, string>;
    id?: string;
    indexBy?: string;
    primaryImageHeight?: number;
    primaryImageWidth?: number;
    rememberIndexing?: boolean;
    rememberSorting?: boolean;
    scrollDirection?: ScrollDirectionEnum;
    showBackdrop?: boolean;
    showSidebar?: boolean;
    sortBy?: string;
    sortOrder?: SortOrderEnum;
    viewType?: string;
}
