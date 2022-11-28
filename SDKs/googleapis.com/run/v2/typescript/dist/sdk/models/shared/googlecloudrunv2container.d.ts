import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2EnvVar } from "./googlecloudrunv2envvar";
import { GoogleCloudRunV2Probe } from "./googlecloudrunv2probe";
import { GoogleCloudRunV2ContainerPort } from "./googlecloudrunv2containerport";
import { GoogleCloudRunV2ResourceRequirements } from "./googlecloudrunv2resourcerequirements";
import { GoogleCloudRunV2VolumeMount } from "./googlecloudrunv2volumemount";
/**
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
export declare class GoogleCloudRunV2Container extends SpeakeasyBase {
    args?: string[];
    command?: string[];
    env?: GoogleCloudRunV2EnvVar[];
    image?: string;
    livenessProbe?: GoogleCloudRunV2Probe;
    name?: string;
    ports?: GoogleCloudRunV2ContainerPort[];
    resources?: GoogleCloudRunV2ResourceRequirements;
    startupProbe?: GoogleCloudRunV2Probe;
    volumeMounts?: GoogleCloudRunV2VolumeMount[];
    workingDir?: string;
}
