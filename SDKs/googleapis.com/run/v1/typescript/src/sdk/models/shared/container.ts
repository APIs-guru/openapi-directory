import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnvVar } from "./envvar";
import { EnvFromSource } from "./envfromsource";
import { Probe } from "./probe";
import { ContainerPort } from "./containerport";
import { Probe } from "./probe";
import { ResourceRequirements } from "./resourcerequirements";
import { SecurityContext } from "./securitycontext";
import { Probe } from "./probe";
import { VolumeMount } from "./volumemount";


// Container
/** 
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
export class Container extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=command" })
  command?: string[];

  @Metadata({ data: "json, name=env", elemType: shared.EnvVar })
  env?: EnvVar[];

  @Metadata({ data: "json, name=envFrom", elemType: shared.EnvFromSource })
  envFrom?: EnvFromSource[];

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=imagePullPolicy" })
  imagePullPolicy?: string;

  @Metadata({ data: "json, name=livenessProbe" })
  livenessProbe?: Probe;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ports", elemType: shared.ContainerPort })
  ports?: ContainerPort[];

  @Metadata({ data: "json, name=readinessProbe" })
  readinessProbe?: Probe;

  @Metadata({ data: "json, name=resources" })
  resources?: ResourceRequirements;

  @Metadata({ data: "json, name=securityContext" })
  securityContext?: SecurityContext;

  @Metadata({ data: "json, name=startupProbe" })
  startupProbe?: Probe;

  @Metadata({ data: "json, name=terminationMessagePath" })
  terminationMessagePath?: string;

  @Metadata({ data: "json, name=terminationMessagePolicy" })
  terminationMessagePolicy?: string;

  @Metadata({ data: "json, name=volumeMounts", elemType: shared.VolumeMount })
  volumeMounts?: VolumeMount[];

  @Metadata({ data: "json, name=workingDir" })
  workingDir?: string;
}
