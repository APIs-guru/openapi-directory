import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Hold } from "./hold";
/**
 * The holds for a matter.
**/
export declare class ListHoldsResponse extends SpeakeasyBase {
    holds?: Hold[];
    nextPageToken?: string;
}
