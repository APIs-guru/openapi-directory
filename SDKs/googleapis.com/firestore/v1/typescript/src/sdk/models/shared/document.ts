import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// Document
/** 
 * A Firestore document. Must not exceed 1 MiB - 4 bytes.
**/
export class Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.Value })
  fields?: Map<string, Value>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
