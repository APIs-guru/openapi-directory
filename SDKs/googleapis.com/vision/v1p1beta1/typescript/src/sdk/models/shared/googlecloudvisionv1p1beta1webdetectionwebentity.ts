import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p1beta1WebDetectionWebEntity
/** 
 * Entity deduced from similar images on the Internet.
**/
export class GoogleCloudVisionV1p1beta1WebDetectionWebEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
