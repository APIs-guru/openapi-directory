import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { SourceProvenance } from "./sourceprovenance";


export enum BuildConfigDockerRegistryEnum {
    DockerRegistryUnspecified = "DOCKER_REGISTRY_UNSPECIFIED",
    ContainerRegistry = "CONTAINER_REGISTRY",
    ArtifactRegistry = "ARTIFACT_REGISTRY"
}


// BuildConfig
/** 
 * Describes the Build step of the function that builds a container from the given source.
**/
export class BuildConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: string;

  @SpeakeasyMetadata({ data: "json, name=buildpackStack" })
  buildpackStack?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerRegistry" })
  dockerRegistry?: BuildConfigDockerRegistryEnum;

  @SpeakeasyMetadata({ data: "json, name=dockerRepository" })
  dockerRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=sourceProvenance" })
  sourceProvenance?: SourceProvenance;

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: string;
}


// BuildConfigInput
/** 
 * Describes the Build step of the function that builds a container from the given source.
**/
export class BuildConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildpackStack" })
  buildpackStack?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerRegistry" })
  dockerRegistry?: BuildConfigDockerRegistryEnum;

  @SpeakeasyMetadata({ data: "json, name=dockerRepository" })
  dockerRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=entryPoint" })
  entryPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=runtime" })
  runtime?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=sourceProvenance" })
  sourceProvenance?: SourceProvenance;

  @SpeakeasyMetadata({ data: "json, name=workerPool" })
  workerPool?: string;
}
