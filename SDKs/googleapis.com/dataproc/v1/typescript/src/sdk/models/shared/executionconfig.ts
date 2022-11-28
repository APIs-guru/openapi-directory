import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionConfig
/** 
 * Execution configuration for a workload.
**/
export class ExecutionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=idleTtl" })
  idleTtl?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetworkUri" })
  subnetworkUri?: string;
}
