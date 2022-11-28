import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2VolumeMount
/** 
 * VolumeMount describes a mounting of a Volume within a container.
**/
export class GoogleCloudRunV2VolumeMount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mountPath" })
  mountPath?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
