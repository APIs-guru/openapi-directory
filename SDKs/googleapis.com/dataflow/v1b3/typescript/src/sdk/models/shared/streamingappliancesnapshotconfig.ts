import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StreamingApplianceSnapshotConfig
/** 
 * Streaming appliance snapshot configuration.
**/
export class StreamingApplianceSnapshotConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importStateEndpoint" })
  importStateEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=snapshotId" })
  snapshotId?: string;
}
