import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeFunctionSet } from "./googleappsscripttypefunctionset";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";


export enum FileTypeEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED",
    ServerJs = "SERVER_JS",
    Html = "HTML",
    Json = "JSON"
}


// File
/** 
 * An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=functionSet" })
  functionSet?: GoogleAppsScriptTypeFunctionSet;

  @SpeakeasyMetadata({ data: "json, name=lastModifyUser" })
  lastModifyUser?: GoogleAppsScriptTypeUser;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
