import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { ImageContext } from "./imagecontext";
import { InputConfig } from "./inputconfig";
import { OutputConfig } from "./outputconfig";



// AsyncAnnotateFileRequest
/** 
 * An offline file annotation request.
**/
export class AsyncAnnotateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: Feature })
  features?: Feature[];

  @SpeakeasyMetadata({ data: "json, name=imageContext" })
  imageContext?: ImageContext;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;
}
