import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";


// Source
/** 
 * `Source` is one or more `File` messages comprising a logical set of rules.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.File })
  files?: File[];
}
