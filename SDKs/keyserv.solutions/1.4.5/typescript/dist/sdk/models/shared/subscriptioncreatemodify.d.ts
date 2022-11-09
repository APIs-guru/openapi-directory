import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SubscriptionCreateModify extends SpeakeasyBase {
    action: string;
    callbackOnModify?: boolean;
    callbackUrl?: string;
    custom?: any;
    frequency: string;
    key?: string;
    name?: string;
    serial?: string;
    startFrom?: string;
}
