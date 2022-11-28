import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";



// Content
/** 
 * The Content resource.
**/
export class Content extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files?: File[];

  @SpeakeasyMetadata({ data: "json, name=scriptId" })
  scriptId?: string;
}
