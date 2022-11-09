import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Release } from "./release";


// Channel
/** 
 * A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=release" })
  release?: Release;

  @Metadata({ data: "json, name=retainedReleaseCount" })
  retainedReleaseCount?: number;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
