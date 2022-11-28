import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
 *
**/
export declare class LongviewClientApps extends SpeakeasyBase {
    apache?: boolean;
    mysql?: boolean;
    nginx?: boolean;
}
/**
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
 *
**/
export declare class LongviewClient extends SpeakeasyBase {
    apiKey?: string;
    apps?: LongviewClientApps;
    created?: Date;
    id?: number;
    installCode?: string;
    label?: string;
    updated?: Date;
}
/**
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
 *
**/
export declare class LongviewClientInput extends SpeakeasyBase {
    label?: string;
}
