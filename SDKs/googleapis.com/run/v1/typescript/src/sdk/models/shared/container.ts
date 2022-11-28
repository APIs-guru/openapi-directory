import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvVar } from "./envvar";
import { EnvFromSource } from "./envfromsource";
import { Probe } from "./probe";
import { ContainerPort } from "./containerport";
import { ResourceRequirements } from "./resourcerequirements";
import { SecurityContext } from "./securitycontext";
import { VolumeMount } from "./volumemount";



// Container
/** 
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
export class Container extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];

  @SpeakeasyMetadata({ data: "json, name=env", elemType: EnvVar })
  env?: EnvVar[];

  @SpeakeasyMetadata({ data: "json, name=envFrom", elemType: EnvFromSource })
  envFrom?: EnvFromSource[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=imagePullPolicy" })
  imagePullPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=livenessProbe" })
  livenessProbe?: Probe;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ports", elemType: ContainerPort })
  ports?: ContainerPort[];

  @SpeakeasyMetadata({ data: "json, name=readinessProbe" })
  readinessProbe?: Probe;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: ResourceRequirements;

  @SpeakeasyMetadata({ data: "json, name=securityContext" })
  securityContext?: SecurityContext;

  @SpeakeasyMetadata({ data: "json, name=startupProbe" })
  startupProbe?: Probe;

  @SpeakeasyMetadata({ data: "json, name=terminationMessagePath" })
  terminationMessagePath?: string;

  @SpeakeasyMetadata({ data: "json, name=terminationMessagePolicy" })
  terminationMessagePolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeMounts", elemType: VolumeMount })
  volumeMounts?: VolumeMount[];

  @SpeakeasyMetadata({ data: "json, name=workingDir" })
  workingDir?: string;
}
