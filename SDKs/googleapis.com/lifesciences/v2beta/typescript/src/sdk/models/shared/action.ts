import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Secret } from "./secret";
import { Secret } from "./secret";
import { Mount } from "./mount";


// Action
/** 
 * Specifies a single action that runs a Docker container.
**/
export class Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=alwaysRun" })
  alwaysRun?: boolean;

  @Metadata({ data: "json, name=blockExternalNetwork" })
  blockExternalNetwork?: boolean;

  @Metadata({ data: "json, name=commands" })
  commands?: string[];

  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=credentials" })
  credentials?: Secret;

  @Metadata({ data: "json, name=disableImagePrefetch" })
  disableImagePrefetch?: boolean;

  @Metadata({ data: "json, name=disableStandardErrorCapture" })
  disableStandardErrorCapture?: boolean;

  @Metadata({ data: "json, name=enableFuse" })
  enableFuse?: boolean;

  @Metadata({ data: "json, name=encryptedEnvironment" })
  encryptedEnvironment?: Secret;

  @Metadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ignoreExitStatus" })
  ignoreExitStatus?: boolean;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mounts", elemType: shared.Mount })
  mounts?: Mount[];

  @Metadata({ data: "json, name=pidNamespace" })
  pidNamespace?: string;

  @Metadata({ data: "json, name=portMappings" })
  portMappings?: Map<string, number>;

  @Metadata({ data: "json, name=publishExposedPorts" })
  publishExposedPorts?: boolean;

  @Metadata({ data: "json, name=runInBackground" })
  runInBackground?: boolean;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
