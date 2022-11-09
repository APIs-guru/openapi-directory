import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";


// Project
/** 
 * The script project resource.
**/
export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: GoogleAppsScriptTypeUser;

  @Metadata({ data: "json, name=lastModifyUser" })
  lastModifyUser?: GoogleAppsScriptTypeUser;

  @Metadata({ data: "json, name=parentId" })
  parentId?: string;

  @Metadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
