import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogView
/** 
 * Describes a view over log entries in a bucket.
**/
export class LogView extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
