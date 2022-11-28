import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentsTarget } from "./documentstarget";
import { QueryTarget } from "./querytarget";
/**
 * A specification of a set of documents to listen to.
**/
export declare class Target extends SpeakeasyBase {
    documents?: DocumentsTarget;
    once?: boolean;
    query?: QueryTarget;
    readTime?: string;
    resumeToken?: string;
    targetId?: number;
}
