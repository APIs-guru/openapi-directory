import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A representation of the FilteringAttribute resource. Filtering attributes are per event type.
**/
export declare class FilteringAttribute extends SpeakeasyBase {
    attribute?: string;
    description?: string;
    pathPatternSupported?: boolean;
    required?: boolean;
}
