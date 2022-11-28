import { SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";
/**
 * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
**/
export declare class ChannelInput extends SpeakeasyBase {
    expireTime?: string;
    labels?: Map<string, string>;
    name?: string;
    release?: Release;
    retainedReleaseCount?: number;
    ttl?: string;
}
/**
 * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
**/
export declare class Channel extends SpeakeasyBase {
    createTime?: string;
    expireTime?: string;
    labels?: Map<string, string>;
    name?: string;
    release?: Release;
    retainedReleaseCount?: number;
    ttl?: string;
    updateTime?: string;
    url?: string;
}
