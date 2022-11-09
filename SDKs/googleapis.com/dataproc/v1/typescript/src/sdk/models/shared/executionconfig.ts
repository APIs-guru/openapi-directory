import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionConfig
/** 
 * Execution configuration for a workload.
**/
export class ExecutionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=idleTtl" })
  idleTtl?: string;

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=subnetworkUri" })
  subnetworkUri?: string;
}
