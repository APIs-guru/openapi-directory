import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReadWriteReadLockModeEnum {
    ReadLockModeUnspecified = "READ_LOCK_MODE_UNSPECIFIED"
,    Pessimistic = "PESSIMISTIC"
,    Optimistic = "OPTIMISTIC"
}


// ReadWrite
/** 
 * Message type to initiate a read-write transaction. Currently this transaction type has no options.
**/
export class ReadWrite extends SpeakeasyBase {
  @Metadata({ data: "json, name=readLockMode" })
  readLockMode?: ReadWriteReadLockModeEnum;
}
