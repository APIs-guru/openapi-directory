import { SpeakeasyBase } from "../../../internal/utils";
import { ResultDebugInfo } from "./resultdebuginfo";
import { Metadata } from "./metadata";
import { Snippet } from "./snippet";
/**
 * Results containing indexed information for a document.
**/
export declare class SearchResult extends SpeakeasyBase {
    clusteredResults?: SearchResult[];
    debugInfo?: ResultDebugInfo;
    metadata?: Metadata;
    snippet?: Snippet;
    title?: string;
    url?: string;
}
