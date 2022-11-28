import { SpeakeasyBase } from "../../../internal/utils";
import { Write } from "./write";
/**
 * The request for Firestore.Commit.
**/
export declare class CommitRequest extends SpeakeasyBase {
    transaction?: string;
    writes?: Write[];
}
