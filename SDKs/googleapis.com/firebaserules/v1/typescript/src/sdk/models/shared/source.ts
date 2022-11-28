import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";



// Source
/** 
 * `Source` is one or more `File` messages comprising a logical set of rules.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files?: File[];
}
