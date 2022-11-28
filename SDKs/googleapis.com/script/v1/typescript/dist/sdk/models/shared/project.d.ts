import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";
/**
 * The script project resource.
**/
export declare class Project extends SpeakeasyBase {
    createTime?: string;
    creator?: GoogleAppsScriptTypeUser;
    lastModifyUser?: GoogleAppsScriptTypeUser;
    parentId?: string;
    scriptId?: string;
    title?: string;
    updateTime?: string;
}
