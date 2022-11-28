import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { ImageContext } from "./imagecontext";
import { InputConfig } from "./inputconfig";



// AnnotateFileRequest
/** 
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export class AnnotateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: Feature })
  features?: Feature[];

  @SpeakeasyMetadata({ data: "json, name=imageContext" })
  imageContext?: ImageContext;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number[];
}
