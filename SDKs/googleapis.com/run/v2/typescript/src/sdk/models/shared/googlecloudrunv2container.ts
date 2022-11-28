import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2EnvVar } from "./googlecloudrunv2envvar";
import { GoogleCloudRunV2Probe } from "./googlecloudrunv2probe";
import { GoogleCloudRunV2ContainerPort } from "./googlecloudrunv2containerport";
import { GoogleCloudRunV2ResourceRequirements } from "./googlecloudrunv2resourcerequirements";
import { GoogleCloudRunV2VolumeMount } from "./googlecloudrunv2volumemount";



// GoogleCloudRunV2Container
/** 
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
export class GoogleCloudRunV2Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=env", elemType: GoogleCloudRunV2EnvVar })
  env?: GoogleCloudRunV2EnvVar[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=livenessProbe" })
  livenessProbe?: GoogleCloudRunV2Probe;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ports", elemType: GoogleCloudRunV2ContainerPort })
  ports?: GoogleCloudRunV2ContainerPort[];

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: GoogleCloudRunV2ResourceRequirements;

  @SpeakeasyMetadata({ data: "json, name=startupProbe" })
  startupProbe?: GoogleCloudRunV2Probe;

  @SpeakeasyMetadata({ data: "json, name=volumeMounts", elemType: GoogleCloudRunV2VolumeMount })
  volumeMounts?: GoogleCloudRunV2VolumeMount[];

  @SpeakeasyMetadata({ data: "json, name=workingDir" })
  workingDir?: string;
}
