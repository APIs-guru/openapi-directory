import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filters events based on exact matches on the CloudEvents attributes.
**/
export declare class EventFilter extends SpeakeasyBase {
    attribute?: string;
    operator?: string;
    value?: string;
}
