import { SpeakeasyBase } from "../../../internal/utils";
import { WindowsUpdateCategory } from "./windowsupdatecategory";
/**
 * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
**/
export declare class WindowsUpdatePackage extends SpeakeasyBase {
    categories?: WindowsUpdateCategory[];
    description?: string;
    kbArticleIds?: string[];
    lastDeploymentChangeTime?: string;
    moreInfoUrls?: string[];
    revisionNumber?: number;
    supportUrl?: string;
    title?: string;
    updateId?: string;
}
