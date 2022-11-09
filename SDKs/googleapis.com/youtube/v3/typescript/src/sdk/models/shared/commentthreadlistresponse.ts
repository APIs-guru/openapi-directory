import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommentThread } from "./commentthread";
import { PageInfo } from "./pageinfo";


export class CommentThreadListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=items", elemType: shared.CommentThread })
  items?: CommentThread[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @Metadata({ data: "json, name=tokenPagination" })
  tokenPagination?: Map<string, any>;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
