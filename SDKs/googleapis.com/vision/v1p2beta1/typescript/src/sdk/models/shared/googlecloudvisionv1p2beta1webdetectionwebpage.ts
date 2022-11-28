import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";



// GoogleCloudVisionV1p2beta1WebDetectionWebPage
/** 
 * Metadata for web pages.
**/
export class GoogleCloudVisionV1p2beta1WebDetectionWebPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullMatchingImages", elemType: GoogleCloudVisionV1p2beta1WebDetectionWebImage })
  fullMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];

  @SpeakeasyMetadata({ data: "json, name=pageTitle" })
  pageTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=partialMatchingImages", elemType: GoogleCloudVisionV1p2beta1WebDetectionWebImage })
  partialMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
