import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
**/
export declare class BillingAccount extends SpeakeasyBase {
    displayName?: string;
    masterBillingAccount?: string;
    name?: string;
    open?: boolean;
}
/**
 * A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
**/
export declare class BillingAccountInput extends SpeakeasyBase {
    displayName?: string;
    masterBillingAccount?: string;
}
