import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";



// ChannelInput
/** 
 * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
**/
export class ChannelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=release" })
  release?: Release;

  @SpeakeasyMetadata({ data: "json, name=retainedReleaseCount" })
  retainedReleaseCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}


// Channel
/** 
 * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
**/
export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=release" })
  release?: Release;

  @SpeakeasyMetadata({ data: "json, name=retainedReleaseCount" })
  retainedReleaseCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
