import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsScriptTypeFunctionSet } from "./googleappsscripttypefunctionset";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";

export enum FileTypeEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED"
,    ServerJs = "SERVER_JS"
,    Html = "HTML"
,    Json = "JSON"
}


// File
/** 
 * An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=functionSet" })
  functionSet?: GoogleAppsScriptTypeFunctionSet;

  @Metadata({ data: "json, name=lastModifyUser" })
  lastModifyUser?: GoogleAppsScriptTypeUser;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=type" })
  type?: FileTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
