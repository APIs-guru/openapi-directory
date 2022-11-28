import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAttemptNum" })
  eventAttemptNum?: number;

  @SpeakeasyMetadata({ data: "json, name=taskAttemptNum" })
  taskAttemptNum?: number;

  @SpeakeasyMetadata({ data: "json, name=taskName" })
  taskName?: string;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
