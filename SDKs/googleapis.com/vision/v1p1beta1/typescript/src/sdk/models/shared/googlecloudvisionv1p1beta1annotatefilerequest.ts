import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";


// GoogleCloudVisionV1p1beta1AnnotateFileRequest
/** 
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export class GoogleCloudVisionV1p1beta1AnnotateFileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.GoogleCloudVisionV1p1beta1Feature })
  features?: GoogleCloudVisionV1p1beta1Feature[];

  @Metadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p1beta1ImageContext;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;

  @Metadata({ data: "json, name=pages" })
  pages?: number[];
}
