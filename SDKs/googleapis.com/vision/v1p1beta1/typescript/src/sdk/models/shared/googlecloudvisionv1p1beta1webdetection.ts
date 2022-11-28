import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1WebDetectionWebLabel } from "./googlecloudvisionv1p1beta1webdetectionweblabel";
import { GoogleCloudVisionV1p1beta1WebDetectionWebImage } from "./googlecloudvisionv1p1beta1webdetectionwebimage";
import { GoogleCloudVisionV1p1beta1WebDetectionWebPage } from "./googlecloudvisionv1p1beta1webdetectionwebpage";
import { GoogleCloudVisionV1p1beta1WebDetectionWebEntity } from "./googlecloudvisionv1p1beta1webdetectionwebentity";



// GoogleCloudVisionV1p1beta1WebDetection
/** 
 * Relevant information for the image from the Internet.
**/
export class GoogleCloudVisionV1p1beta1WebDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestGuessLabels", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebLabel })
  bestGuessLabels?: GoogleCloudVisionV1p1beta1WebDetectionWebLabel[];

  @SpeakeasyMetadata({ data: "json, name=fullMatchingImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebImage })
  fullMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];

  @SpeakeasyMetadata({ data: "json, name=pagesWithMatchingImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebPage })
  pagesWithMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebPage[];

  @SpeakeasyMetadata({ data: "json, name=partialMatchingImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebImage })
  partialMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];

  @SpeakeasyMetadata({ data: "json, name=visuallySimilarImages", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebImage })
  visuallySimilarImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];

  @SpeakeasyMetadata({ data: "json, name=webEntities", elemType: GoogleCloudVisionV1p1beta1WebDetectionWebEntity })
  webEntities?: GoogleCloudVisionV1p1beta1WebDetectionWebEntity[];
}
