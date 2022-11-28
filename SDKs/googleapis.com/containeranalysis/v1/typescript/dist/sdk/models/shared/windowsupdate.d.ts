import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Identity } from "./identity";
/**
 * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
**/
export declare class WindowsUpdate extends SpeakeasyBase {
    categories?: Category[];
    description?: string;
    identity?: Identity;
    kbArticleIds?: string[];
    lastPublishedTimestamp?: string;
    supportUrl?: string;
    title?: string;
}
