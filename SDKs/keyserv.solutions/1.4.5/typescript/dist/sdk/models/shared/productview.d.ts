import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionView } from "./subscriptionview";
export declare class ProductView extends SpeakeasyBase {
    created?: Date;
    custom?: any;
    name?: string;
    serial?: string;
    subscriptions?: SubscriptionView[];
    updated?: Date;
}
