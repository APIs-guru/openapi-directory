import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";



// Project
/** 
 * The script project resource.
**/
export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: GoogleAppsScriptTypeUser;

  @SpeakeasyMetadata({ data: "json, name=lastModifyUser" })
  lastModifyUser?: GoogleAppsScriptTypeUser;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
