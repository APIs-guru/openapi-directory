import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1WebDetectionWebImage } from "./googlecloudvisionv1p1beta1webdetectionwebimage";
import { GoogleCloudVisionV1p1beta1WebDetectionWebImage } from "./googlecloudvisionv1p1beta1webdetectionwebimage";


// GoogleCloudVisionV1p1beta1WebDetectionWebPage
/** 
 * Metadata for web pages.
**/
export class GoogleCloudVisionV1p1beta1WebDetectionWebPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullMatchingImages", elemType: shared.GoogleCloudVisionV1p1beta1WebDetectionWebImage })
  fullMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];

  @Metadata({ data: "json, name=pageTitle" })
  pageTitle?: string;

  @Metadata({ data: "json, name=partialMatchingImages", elemType: shared.GoogleCloudVisionV1p1beta1WebDetectionWebImage })
  partialMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
