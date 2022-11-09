import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserContentUrlJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;
}


export class GetUserContentUrlJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentUrlJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserContentUrlJsonQueryParams;

  @Metadata()
  security: GetUserContentUrlJsonSecurity;
}


export class GetUserContentUrlJson200ApplicationJsonDebug extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentUrlJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @Metadata({ data: "json, name=commentBody" })
  commentBody?: string;

  @Metadata({ data: "json, name=commentID" })
  commentId?: number;

  @Metadata({ data: "json, name=commentSequence" })
  commentSequence?: number;

  @Metadata({ data: "json, name=commentTitle" })
  commentTitle?: string;

  @Metadata({ data: "json, name=commentType" })
  commentType?: string;

  @Metadata({ data: "json, name=createDate" })
  createDate?: string;

  @Metadata({ data: "json, name=depth" })
  depth?: number;

  @Metadata({ data: "json, name=editorsSelection" })
  editorsSelection?: boolean;

  @Metadata({ data: "json, name=parentID" })
  parentId?: any;

  @Metadata({ data: "json, name=parentUserDisplayName" })
  parentUserDisplayName?: any;

  @Metadata({ data: "json, name=permID" })
  permId?: string;

  @Metadata({ data: "json, name=picURL" })
  picUrl?: string;

  @Metadata({ data: "json, name=recommendations" })
  recommendations?: number;

  @Metadata({ data: "json, name=recommendedFlag" })
  recommendedFlag?: any;

  @Metadata({ data: "json, name=replies" })
  replies?: any[];

  @Metadata({ data: "json, name=replyCount" })
  replyCount?: number;

  @Metadata({ data: "json, name=reportAbuseFlag" })
  reportAbuseFlag?: any;

  @Metadata({ data: "json, name=sharing" })
  sharing?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=timespeople" })
  timespeople?: number;

  @Metadata({ data: "json, name=trusted" })
  trusted?: number;

  @Metadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @Metadata({ data: "json, name=userDisplayName" })
  userDisplayName?: string;

  @Metadata({ data: "json, name=userID" })
  userId?: number;

  @Metadata({ data: "json, name=userLocation" })
  userLocation?: string;

  @Metadata({ data: "json, name=userTitle" })
  userTitle?: any;

  @Metadata({ data: "json, name=userURL" })
  userUrl?: any;
}


export class GetUserContentUrlJson200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @Metadata({ data: "json, name=callerID" })
  callerId?: any;

  @Metadata({ data: "json, name=comments", elemType: operations.GetUserContentUrlJson200ApplicationJsonResultsComments })
  comments?: GetUserContentUrlJson200ApplicationJsonResultsComments[];

  @Metadata({ data: "json, name=depthLimit" })
  depthLimit?: number;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=replyLimit" })
  replyLimit?: number;

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=totalCommentsFound" })
  totalCommentsFound?: number;

  @Metadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;

  @Metadata({ data: "json, name=totalEditorsSelectionFound" })
  totalEditorsSelectionFound?: number;

  @Metadata({ data: "json, name=totalEditorsSelectionReturned" })
  totalEditorsSelectionReturned?: number;

  @Metadata({ data: "json, name=totalParentCommentsFound" })
  totalParentCommentsFound?: number;

  @Metadata({ data: "json, name=totalParentCommentsReturned" })
  totalParentCommentsReturned?: number;

  @Metadata({ data: "json, name=totalRecommendationsFound" })
  totalRecommendationsFound?: number;

  @Metadata({ data: "json, name=totalRecommendationsReturned" })
  totalRecommendationsReturned?: number;

  @Metadata({ data: "json, name=totalReplyCommentsFound" })
  totalReplyCommentsFound?: number;

  @Metadata({ data: "json, name=totalReplyCommentsReturned" })
  totalReplyCommentsReturned?: number;

  @Metadata({ data: "json, name=totalReporterReplyCommentsFound" })
  totalReporterReplyCommentsFound?: number;

  @Metadata({ data: "json, name=totalReporterReplyCommentsReturned" })
  totalReporterReplyCommentsReturned?: number;
}


export class GetUserContentUrlJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=debug" })
  debug?: GetUserContentUrlJson200ApplicationJsonDebug;

  @Metadata({ data: "json, name=results" })
  results?: GetUserContentUrlJson200ApplicationJsonResults;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentUrlJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUserContentUrlJson200ApplicationJsonObject?: GetUserContentUrlJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
