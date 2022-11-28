import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { SourceProvenance } from "./sourceprovenance";
export declare enum BuildConfigDockerRegistryEnum {
    DockerRegistryUnspecified = "DOCKER_REGISTRY_UNSPECIFIED",
    ContainerRegistry = "CONTAINER_REGISTRY",
    ArtifactRegistry = "ARTIFACT_REGISTRY"
}
/**
 * Describes the Build step of the function that builds a container from the given source.
**/
export declare class BuildConfigInput extends SpeakeasyBase {
    buildpackStack?: string;
    dockerRegistry?: BuildConfigDockerRegistryEnum;
    dockerRepository?: string;
    entryPoint?: string;
    environmentVariables?: Map<string, string>;
    runtime?: string;
    source?: Source;
    sourceProvenance?: SourceProvenance;
    workerPool?: string;
}
/**
 * Describes the Build step of the function that builds a container from the given source.
**/
export declare class BuildConfig extends SpeakeasyBase {
    build?: string;
    buildpackStack?: string;
    dockerRegistry?: BuildConfigDockerRegistryEnum;
    dockerRepository?: string;
    entryPoint?: string;
    environmentVariables?: Map<string, string>;
    runtime?: string;
    source?: Source;
    sourceProvenance?: SourceProvenance;
    workerPool?: string;
}
