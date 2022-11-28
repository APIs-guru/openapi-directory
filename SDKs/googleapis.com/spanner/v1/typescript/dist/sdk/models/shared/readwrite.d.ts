import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReadWriteReadLockModeEnum {
    ReadLockModeUnspecified = "READ_LOCK_MODE_UNSPECIFIED",
    Pessimistic = "PESSIMISTIC",
    Optimistic = "OPTIMISTIC"
}
/**
 * Message type to initiate a read-write transaction. Currently this transaction type has no options.
**/
export declare class ReadWrite extends SpeakeasyBase {
    readLockMode?: ReadWriteReadLockModeEnum;
}
