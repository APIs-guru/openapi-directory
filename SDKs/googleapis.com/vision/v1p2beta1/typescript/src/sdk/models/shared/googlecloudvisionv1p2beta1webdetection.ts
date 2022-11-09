import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1WebDetectionWebLabel } from "./googlecloudvisionv1p2beta1webdetectionweblabel";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";
import { GoogleCloudVisionV1p2beta1WebDetectionWebPage } from "./googlecloudvisionv1p2beta1webdetectionwebpage";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";
import { GoogleCloudVisionV1p2beta1WebDetectionWebEntity } from "./googlecloudvisionv1p2beta1webdetectionwebentity";


// GoogleCloudVisionV1p2beta1WebDetection
/** 
 * Relevant information for the image from the Internet.
**/
export class GoogleCloudVisionV1p2beta1WebDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=bestGuessLabels", elemType: shared.GoogleCloudVisionV1p2beta1WebDetectionWebLabel })
  bestGuessLabels?: GoogleCloudVisionV1p2beta1WebDetectionWebLabel[];

  @Metadata({ data: "json, name=fullMatchingImages", elemType: shared.GoogleCloudVisionV1p2beta1WebDetectionWebImage })
  fullMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];

  @Metadata({ data: "json, name=pagesWithMatchingImages", elemType: shared.GoogleCloudVisionV1p2beta1WebDetectionWebPage })
  pagesWithMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebPage[];

  @Metadata({ data: "json, name=partialMatchingImages", elemType: shared.GoogleCloudVisionV1p2beta1WebDetectionWebImage })
  partialMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];

  @Metadata({ data: "json, name=visuallySimilarImages", elemType: shared.GoogleCloudVisionV1p2beta1WebDetectionWebImage })
  visuallySimilarImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];

  @Metadata({ data: "json, name=webEntities", elemType: shared.GoogleCloudVisionV1p2beta1WebDetectionWebEntity })
  webEntities?: GoogleCloudVisionV1p2beta1WebDetectionWebEntity[];
}
