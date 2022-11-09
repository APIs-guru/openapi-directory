import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2EnvVar } from "./googlecloudrunv2envvar";
import { GoogleCloudRunV2Probe } from "./googlecloudrunv2probe";
import { GoogleCloudRunV2ContainerPort } from "./googlecloudrunv2containerport";
import { GoogleCloudRunV2ResourceRequirements } from "./googlecloudrunv2resourcerequirements";
import { GoogleCloudRunV2Probe } from "./googlecloudrunv2probe";
import { GoogleCloudRunV2VolumeMount } from "./googlecloudrunv2volumemount";


// GoogleCloudRunV2Container
/** 
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
export class GoogleCloudRunV2Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=env", elemType: shared.GoogleCloudRunV2EnvVar })
  env?: GoogleCloudRunV2EnvVar[];

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=livenessProbe" })
  livenessProbe?: GoogleCloudRunV2Probe;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ports", elemType: shared.GoogleCloudRunV2ContainerPort })
  ports?: GoogleCloudRunV2ContainerPort[];

  @Metadata({ data: "json, name=resources" })
  resources?: GoogleCloudRunV2ResourceRequirements;

  @Metadata({ data: "json, name=startupProbe" })
  startupProbe?: GoogleCloudRunV2Probe;

  @Metadata({ data: "json, name=volumeMounts", elemType: shared.GoogleCloudRunV2VolumeMount })
  volumeMounts?: GoogleCloudRunV2VolumeMount[];

  @Metadata({ data: "json, name=workingDir" })
  workingDir?: string;
}
