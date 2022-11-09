import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Feature } from "./feature";
import { ImageContext } from "./imagecontext";
import { InputConfig } from "./inputconfig";


// AnnotateFileRequest
/** 
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export class AnnotateFileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.Feature })
  features?: Feature[];

  @Metadata({ data: "json, name=imageContext" })
  imageContext?: ImageContext;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;

  @Metadata({ data: "json, name=pages" })
  pages?: number[];
}
