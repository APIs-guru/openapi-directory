import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PubsubSnapshotMetadata } from "./pubsubsnapshotmetadata";

export enum SnapshotStateEnum {
    UnknownSnapshotState = "UNKNOWN_SNAPSHOT_STATE"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Ready = "READY"
,    Failed = "FAILED"
,    Deleted = "DELETED"
}


// Snapshot
/** 
 * Represents a snapshot of a job.
**/
export class Snapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=diskSizeBytes" })
  diskSizeBytes?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=pubsubMetadata", elemType: shared.PubsubSnapshotMetadata })
  pubsubMetadata?: PubsubSnapshotMetadata[];

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=sourceJobId" })
  sourceJobId?: string;

  @Metadata({ data: "json, name=state" })
  state?: SnapshotStateEnum;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
