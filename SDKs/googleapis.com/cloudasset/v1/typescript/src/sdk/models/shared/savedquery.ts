import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryContent } from "./querycontent";



// SavedQueryInput
/** 
 * A saved query which can be shared with others or used later.
**/
export class SavedQueryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: QueryContent;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// SavedQuery
/** 
 * A saved query which can be shared with others or used later.
**/
export class SavedQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: QueryContent;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdater" })
  lastUpdater?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
