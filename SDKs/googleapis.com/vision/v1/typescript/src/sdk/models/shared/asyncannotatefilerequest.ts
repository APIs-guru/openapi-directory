import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Feature } from "./feature";
import { ImageContext } from "./imagecontext";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";


// AsyncAnnotateFileRequest
/** 
 * An offline file annotation request.
**/
export class AsyncAnnotateFileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.Feature })
  features?: Feature[];

  @Metadata({ data: "json, name=imageContext" })
  imageContext?: ImageContext;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;
}
