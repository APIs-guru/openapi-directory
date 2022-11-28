import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
import { Mount } from "./mount";


export enum ActionFlagsEnum {
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


// Action
/** 
 * Specifies a single action that runs a Docker container.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commands" })
  commands?: string[];

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: Secret;

  @SpeakeasyMetadata({ data: "json, name=encryptedEnvironment" })
  encryptedEnvironment?: Secret;

  @SpeakeasyMetadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: ActionFlagsEnum[];

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mounts", elemType: Mount })
  mounts?: Mount[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pidNamespace" })
  pidNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=portMappings" })
  portMappings?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
