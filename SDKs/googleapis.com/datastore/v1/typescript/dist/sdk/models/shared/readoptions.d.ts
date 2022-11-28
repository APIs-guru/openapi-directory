import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReadOptionsReadConsistencyEnum {
    ReadConsistencyUnspecified = "READ_CONSISTENCY_UNSPECIFIED",
    Strong = "STRONG",
    Eventual = "EVENTUAL"
}
/**
 * The options shared by read requests.
**/
export declare class ReadOptions extends SpeakeasyBase {
    readConsistency?: ReadOptionsReadConsistencyEnum;
    readTime?: string;
    transaction?: string;
}
