import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1AcceleratorConfig } from "./googlecloudmlv1acceleratorconfig";
import { GoogleCloudMlV1DiskConfig } from "./googlecloudmlv1diskconfig";


// GoogleCloudMlV1ReplicaConfig
/** 
 * Represents the configuration for a replica in a cluster.
**/
export class GoogleCloudMlV1ReplicaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;

  @Metadata({ data: "json, name=containerArgs" })
  containerArgs?: string[];

  @Metadata({ data: "json, name=containerCommand" })
  containerCommand?: string[];

  @Metadata({ data: "json, name=diskConfig" })
  diskConfig?: GoogleCloudMlV1DiskConfig;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=tpuTfVersion" })
  tpuTfVersion?: string;
}
