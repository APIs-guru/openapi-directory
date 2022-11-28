import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
import { Mount } from "./mount";
export declare enum ActionFlagsEnum {
    FlagUnspecified = "FLAG_UNSPECIFIED",
    IgnoreExitStatus = "IGNORE_EXIT_STATUS",
    RunInBackground = "RUN_IN_BACKGROUND",
    AlwaysRun = "ALWAYS_RUN",
    EnableFuse = "ENABLE_FUSE",
    PublishExposedPorts = "PUBLISH_EXPOSED_PORTS",
    DisableImagePrefetch = "DISABLE_IMAGE_PREFETCH",
    DisableStandardErrorCapture = "DISABLE_STANDARD_ERROR_CAPTURE",
    BlockExternalNetwork = "BLOCK_EXTERNAL_NETWORK"
}
/**
 * Specifies a single action that runs a Docker container.
**/
export declare class Action extends SpeakeasyBase {
    commands?: string[];
    credentials?: Secret;
    encryptedEnvironment?: Secret;
    entrypoint?: string;
    environment?: Map<string, string>;
    flags?: ActionFlagsEnum[];
    imageUri?: string;
    labels?: Map<string, string>;
    mounts?: Mount[];
    name?: string;
    pidNamespace?: string;
    portMappings?: Map<string, number>;
    timeout?: string;
}
