import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Secret } from "./secret";
import { Secret } from "./secret";
import { Mount } from "./mount";

export enum ActionFlagsEnum {
    FlagUnspecified = "FLAG_UNSPECIFIED"
,    IgnoreExitStatus = "IGNORE_EXIT_STATUS"
,    RunInBackground = "RUN_IN_BACKGROUND"
,    AlwaysRun = "ALWAYS_RUN"
,    EnableFuse = "ENABLE_FUSE"
,    PublishExposedPorts = "PUBLISH_EXPOSED_PORTS"
,    DisableImagePrefetch = "DISABLE_IMAGE_PREFETCH"
,    DisableStandardErrorCapture = "DISABLE_STANDARD_ERROR_CAPTURE"
,    BlockExternalNetwork = "BLOCK_EXTERNAL_NETWORK"
}


// Action
/** 
 * Specifies a single action that runs a Docker container.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=commands" })
  commands?: string[];

  @Metadata({ data: "json, name=credentials" })
  credentials?: Secret;

  @Metadata({ data: "json, name=encryptedEnvironment" })
  encryptedEnvironment?: Secret;

  @Metadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=flags" })
  flags?: ActionFlagsEnum[];

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mounts", elemType: shared.Mount })
  mounts?: Mount[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pidNamespace" })
  pidNamespace?: string;

  @Metadata({ data: "json, name=portMappings" })
  portMappings?: Map<string, number>;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
