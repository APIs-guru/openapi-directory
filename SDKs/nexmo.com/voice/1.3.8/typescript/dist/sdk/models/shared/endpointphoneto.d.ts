import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Connect to a Phone (PSTN) number
**/
export declare class EndpointPhoneTo extends SpeakeasyBase {
    dtmfAnswer?: string;
    number: string;
    type: string;
}
