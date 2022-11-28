import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p2beta1WebDetectionWebEntity
/** 
 * Entity deduced from similar images on the Internet.
**/
export class GoogleCloudVisionV1p2beta1WebDetectionWebEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
