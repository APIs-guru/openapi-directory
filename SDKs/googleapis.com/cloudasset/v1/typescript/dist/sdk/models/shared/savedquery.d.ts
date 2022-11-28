import { SpeakeasyBase } from "../../../internal/utils";
import { QueryContent } from "./querycontent";
/**
 * A saved query which can be shared with others or used later.
**/
export declare class SavedQueryInput extends SpeakeasyBase {
    content?: QueryContent;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
}
/**
 * A saved query which can be shared with others or used later.
**/
export declare class SavedQuery extends SpeakeasyBase {
    content?: QueryContent;
    createTime?: string;
    creator?: string;
    description?: string;
    labels?: Map<string, string>;
    lastUpdateTime?: string;
    lastUpdater?: string;
    name?: string;
}
