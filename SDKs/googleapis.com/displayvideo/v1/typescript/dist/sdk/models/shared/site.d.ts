import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single site. Sites are apps or websites belonging to a channel.
**/
export declare class Site extends SpeakeasyBase {
    name?: string;
    urlOrAppId?: string;
}
/**
 * A single site. Sites are apps or websites belonging to a channel.
**/
export declare class SiteInput extends SpeakeasyBase {
    urlOrAppId?: string;
}
