import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
/**
 * Database list response.
**/
export declare class DatabasesListResponse extends SpeakeasyBase {
    items?: Database[];
    kind?: string;
}
