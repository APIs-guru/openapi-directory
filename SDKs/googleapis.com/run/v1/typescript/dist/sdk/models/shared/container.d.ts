import { SpeakeasyBase } from "../../../internal/utils";
import { EnvVar } from "./envvar";
import { EnvFromSource } from "./envfromsource";
import { Probe } from "./probe";
import { ContainerPort } from "./containerport";
import { ResourceRequirements } from "./resourcerequirements";
import { SecurityContext } from "./securitycontext";
import { VolumeMount } from "./volumemount";
/**
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
export declare class Container extends SpeakeasyBase {
    args?: string[];
    command?: string[];
    env?: EnvVar[];
    envFrom?: EnvFromSource[];
    image?: string;
    imagePullPolicy?: string;
    livenessProbe?: Probe;
    name?: string;
    ports?: ContainerPort[];
    readinessProbe?: Probe;
    resources?: ResourceRequirements;
    securityContext?: SecurityContext;
    startupProbe?: Probe;
    terminationMessagePath?: string;
    terminationMessagePolicy?: string;
    volumeMounts?: VolumeMount[];
    workingDir?: string;
}
