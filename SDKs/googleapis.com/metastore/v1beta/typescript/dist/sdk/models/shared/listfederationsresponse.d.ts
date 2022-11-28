import { SpeakeasyBase } from "../../../internal/utils";
import { Federation } from "./federation";
/**
 * Response message for ListFederations
**/
export declare class ListFederationsResponse extends SpeakeasyBase {
    federations?: Federation[];
    nextPageToken?: string;
    unreachable?: string[];
}
