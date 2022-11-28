import { SpeakeasyBase } from "../../../internal/utils";
import { KeyView } from "./keyview";
export declare class SubscriptionView extends SpeakeasyBase {
    action: string;
    callbackOnModify: boolean;
    callbackUrl?: string;
    commenced: Date;
    created?: Date;
    custom?: any;
    frequency: string;
    keys?: KeyView[];
    name?: string;
    updated?: Date;
}
