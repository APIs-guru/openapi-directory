import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";


// Content
/** 
 * The Content resource.
**/
export class Content extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.File })
  files?: File[];

  @Metadata({ data: "json, name=scriptId" })
  scriptId?: string;
}
