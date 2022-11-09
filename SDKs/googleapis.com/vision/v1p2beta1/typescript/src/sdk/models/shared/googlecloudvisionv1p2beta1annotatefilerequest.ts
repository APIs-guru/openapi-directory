import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";


// GoogleCloudVisionV1p2beta1AnnotateFileRequest
/** 
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export class GoogleCloudVisionV1p2beta1AnnotateFileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.GoogleCloudVisionV1p2beta1Feature })
  features?: GoogleCloudVisionV1p2beta1Feature[];

  @Metadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

  @Metadata({ data: "json, name=pages" })
  pages?: number[];
}
