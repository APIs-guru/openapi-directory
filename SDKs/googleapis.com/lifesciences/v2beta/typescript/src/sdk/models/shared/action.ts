import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
import { Mount } from "./mount";



// Action
/** 
 * Specifies a single action that runs a Docker container.
**/
export class Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alwaysRun" })
  alwaysRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blockExternalNetwork" })
  blockExternalNetwork?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commands" })
  commands?: string[];

  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: Secret;

  @SpeakeasyMetadata({ data: "json, name=disableImagePrefetch" })
  disableImagePrefetch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableStandardErrorCapture" })
  disableStandardErrorCapture?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableFuse" })
  enableFuse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptedEnvironment" })
  encryptedEnvironment?: Secret;

  @SpeakeasyMetadata({ data: "json, name=entrypoint" })
  entrypoint?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ignoreExitStatus" })
  ignoreExitStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mounts", elemType: Mount })
  mounts?: Mount[];

  @SpeakeasyMetadata({ data: "json, name=pidNamespace" })
  pidNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=portMappings" })
  portMappings?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=publishExposedPorts" })
  publishExposedPorts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=runInBackground" })
  runInBackground?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
