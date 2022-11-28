import { SpeakeasyBase } from "../../../internal/utils";
import { Mutation } from "./mutation";
export declare enum CommitRequestModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Transactional = "TRANSACTIONAL",
    NonTransactional = "NON_TRANSACTIONAL"
}
/**
 * The request for Datastore.Commit.
**/
export declare class CommitRequest extends SpeakeasyBase {
    databaseId?: string;
    mode?: CommitRequestModeEnum;
    mutations?: Mutation[];
    transaction?: string;
}
