import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubSnapshotMetadata } from "./pubsubsnapshotmetadata";


export enum SnapshotStateEnum {
    UnknownSnapshotState = "UNKNOWN_SNAPSHOT_STATE",
    Pending = "PENDING",
    Running = "RUNNING",
    Ready = "READY",
    Failed = "FAILED",
    Deleted = "DELETED"
}


// Snapshot
/** 
 * Represents a snapshot of a job.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diskSizeBytes" })
  diskSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubMetadata", elemType: PubsubSnapshotMetadata })
  pubsubMetadata?: PubsubSnapshotMetadata[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceJobId" })
  sourceJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SnapshotStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
