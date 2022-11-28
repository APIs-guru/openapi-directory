import { SpeakeasyBase } from "../../../internal/utils";
import { RichResultsIssue } from "./richresultsissue";
/**
 * A specific rich result found on the page.
**/
export declare class Item extends SpeakeasyBase {
    issues?: RichResultsIssue[];
    name?: string;
}
