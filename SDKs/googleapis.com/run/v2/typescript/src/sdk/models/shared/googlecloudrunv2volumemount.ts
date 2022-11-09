import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2VolumeMount
/** 
 * VolumeMount describes a mounting of a Volume within a container.
**/
export class GoogleCloudRunV2VolumeMount extends SpeakeasyBase {
  @Metadata({ data: "json, name=mountPath" })
  mountPath?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
