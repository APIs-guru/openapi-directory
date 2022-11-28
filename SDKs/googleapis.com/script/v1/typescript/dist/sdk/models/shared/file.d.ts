import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeFunctionSet } from "./googleappsscripttypefunctionset";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";
export declare enum FileTypeEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED",
    ServerJs = "SERVER_JS",
    Html = "HTML",
    Json = "JSON"
}
/**
 * An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
**/
export declare class File extends SpeakeasyBase {
    createTime?: string;
    functionSet?: GoogleAppsScriptTypeFunctionSet;
    lastModifyUser?: GoogleAppsScriptTypeUser;
    name?: string;
    source?: string;
    type?: FileTypeEnum;
    updateTime?: string;
}
