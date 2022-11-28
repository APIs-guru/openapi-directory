import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An outage by the Snow Monkey on a service
**/
export declare class Outage extends SpeakeasyBase {
    descriptorId: string;
    descriptorName: string;
    duration: number;
    until: string;
}
