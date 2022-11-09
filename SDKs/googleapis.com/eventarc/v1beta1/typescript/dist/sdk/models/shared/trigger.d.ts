import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Destination } from "./destination";
import { MatchingCriteria } from "./matchingcriteria";
import { Transport } from "./transport";
/**
 * A representation of the trigger resource.
**/
export declare class Trigger extends SpeakeasyBase {
    createTime?: string;
    destination?: Destination;
    etag?: string;
    labels?: Map<string, string>;
    matchingCriteria?: MatchingCriteria[];
    name?: string;
    serviceAccount?: string;
    transport?: Transport;
    updateTime?: string;
}
