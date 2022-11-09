import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StreamingApplianceSnapshotConfig
/** 
 * Streaming appliance snapshot configuration.
**/
export class StreamingApplianceSnapshotConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=importStateEndpoint" })
  importStateEndpoint?: string;

  @Metadata({ data: "json, name=snapshotId" })
  snapshotId?: string;
}
