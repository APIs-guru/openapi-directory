import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryContent } from "./querycontent";


// SavedQuery
/** 
 * A saved query which can be shared with others or used later.
**/
export class SavedQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: QueryContent;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=lastUpdater" })
  lastUpdater?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
