import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activity } from "./activity";
import { PageInfo } from "./pageinfo";


export class ActivityListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Activity })
  items?: Activity[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pageInfo" })
  pageInfo?: PageInfo;

  @Metadata({ data: "json, name=prevPageToken" })
  prevPageToken?: string;

  @Metadata({ data: "json, name=tokenPagination" })
  tokenPagination?: Map<string, any>;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
