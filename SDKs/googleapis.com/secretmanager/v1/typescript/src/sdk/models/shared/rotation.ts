import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Rotation
/** 
 * The rotation time and period for a Secret. At next_rotation_time, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. Secret.topics must be set to configure rotation.
**/
export class Rotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextRotationTime" })
  nextRotationTime?: string;

  @Metadata({ data: "json, name=rotationPeriod" })
  rotationPeriod?: string;
}
