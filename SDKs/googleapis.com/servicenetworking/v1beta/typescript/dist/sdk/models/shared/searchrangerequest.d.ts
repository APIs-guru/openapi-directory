import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request to search for an unused range within allocated ranges.
**/
export declare class SearchRangeRequest extends SpeakeasyBase {
    ipPrefixLength?: number;
    network?: string;
}
