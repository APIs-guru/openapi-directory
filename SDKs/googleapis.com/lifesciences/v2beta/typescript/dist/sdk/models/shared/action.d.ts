import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
import { Mount } from "./mount";
/**
 * Specifies a single action that runs a Docker container.
**/
export declare class Action extends SpeakeasyBase {
    alwaysRun?: boolean;
    blockExternalNetwork?: boolean;
    commands?: string[];
    containerName?: string;
    credentials?: Secret;
    disableImagePrefetch?: boolean;
    disableStandardErrorCapture?: boolean;
    enableFuse?: boolean;
    encryptedEnvironment?: Secret;
    entrypoint?: string;
    environment?: Map<string, string>;
    ignoreExitStatus?: boolean;
    imageUri?: string;
    labels?: Map<string, string>;
    mounts?: Mount[];
    pidNamespace?: string;
    portMappings?: Map<string, number>;
    publishExposedPorts?: boolean;
    runInBackground?: boolean;
    timeout?: string;
}
