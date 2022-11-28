import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Rotation
/** 
 * The rotation time and period for a Secret. At next_rotation_time, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. Secret.topics must be set to configure rotation.
**/
export class Rotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;
}
