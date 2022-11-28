import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";



// GoogleCloudVisionV1p2beta1AnnotateFileRequest
/** 
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export class GoogleCloudVisionV1p2beta1AnnotateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: GoogleCloudVisionV1p2beta1Feature })
  features?: GoogleCloudVisionV1p2beta1Feature[];

  @SpeakeasyMetadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number[];
}
