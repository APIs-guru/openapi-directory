import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserContentUrlJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;
}


export class GetUserContentUrlJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentUrlJson200ApplicationJsonDebug extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentUrlJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=commentBody" })
  commentBody?: string;

  @SpeakeasyMetadata({ data: "json, name=commentID" })
  commentId?: number;

  @SpeakeasyMetadata({ data: "json, name=commentSequence" })
  commentSequence?: number;

  @SpeakeasyMetadata({ data: "json, name=commentTitle" })
  commentTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=commentType" })
  commentType?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=depth" })
  depth?: number;

  @SpeakeasyMetadata({ data: "json, name=editorsSelection" })
  editorsSelection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parentID" })
  parentId?: any;

  @SpeakeasyMetadata({ data: "json, name=parentUserDisplayName" })
  parentUserDisplayName?: any;

  @SpeakeasyMetadata({ data: "json, name=permID" })
  permId?: string;

  @SpeakeasyMetadata({ data: "json, name=picURL" })
  picUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendations" })
  recommendations?: number;

  @SpeakeasyMetadata({ data: "json, name=recommendedFlag" })
  recommendedFlag?: any;

  @SpeakeasyMetadata({ data: "json, name=replies" })
  replies?: any[];

  @SpeakeasyMetadata({ data: "json, name=replyCount" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reportAbuseFlag" })
  reportAbuseFlag?: any;

  @SpeakeasyMetadata({ data: "json, name=sharing" })
  sharing?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=timespeople" })
  timespeople?: number;

  @SpeakeasyMetadata({ data: "json, name=trusted" })
  trusted?: number;

  @SpeakeasyMetadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=userDisplayName" })
  userDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=userID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=userLocation" })
  userLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=userTitle" })
  userTitle?: any;

  @SpeakeasyMetadata({ data: "json, name=userURL" })
  userUrl?: any;
}


export class GetUserContentUrlJson200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=callerID" })
  callerId?: any;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentUrlJson200ApplicationJsonResultsComments })
  comments?: GetUserContentUrlJson200ApplicationJsonResultsComments[];

  @SpeakeasyMetadata({ data: "json, name=depthLimit" })
  depthLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=replyLimit" })
  replyLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=totalCommentsFound" })
  totalCommentsFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=totalEditorsSelectionFound" })
  totalEditorsSelectionFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalEditorsSelectionReturned" })
  totalEditorsSelectionReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=totalParentCommentsFound" })
  totalParentCommentsFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalParentCommentsReturned" })
  totalParentCommentsReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRecommendationsFound" })
  totalRecommendationsFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRecommendationsReturned" })
  totalRecommendationsReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReplyCommentsFound" })
  totalReplyCommentsFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReplyCommentsReturned" })
  totalReplyCommentsReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReporterReplyCommentsFound" })
  totalReporterReplyCommentsFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReporterReplyCommentsReturned" })
  totalReporterReplyCommentsReturned?: number;
}


export class GetUserContentUrlJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: GetUserContentUrlJson200ApplicationJsonDebug;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetUserContentUrlJson200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentUrlJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserContentUrlJsonQueryParams;

  @SpeakeasyMetadata()
  security: GetUserContentUrlJsonSecurity;
}


export class GetUserContentUrlJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserContentUrlJson200ApplicationJsonObject?: GetUserContentUrlJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
