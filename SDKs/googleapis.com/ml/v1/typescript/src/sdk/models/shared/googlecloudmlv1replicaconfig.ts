import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AcceleratorConfig } from "./googlecloudmlv1acceleratorconfig";
import { GoogleCloudMlV1DiskConfig } from "./googlecloudmlv1diskconfig";



// GoogleCloudMlV1ReplicaConfig
/** 
 * Represents the configuration for a replica in a cluster.
**/
export class GoogleCloudMlV1ReplicaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=containerArgs" })
  containerArgs?: string[];

  @SpeakeasyMetadata({ data: "json, name=containerCommand" })
  containerCommand?: string[];

  @SpeakeasyMetadata({ data: "json, name=diskConfig" })
  diskConfig?: GoogleCloudMlV1DiskConfig;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=tpuTfVersion" })
  tpuTfVersion?: string;
}
