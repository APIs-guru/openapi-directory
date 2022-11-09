import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventAttemptNum" })
  eventAttemptNum?: number;

  @Metadata({ data: "json, name=taskAttemptNum" })
  taskAttemptNum?: number;

  @Metadata({ data: "json, name=taskName" })
  taskName?: string;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
