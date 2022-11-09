import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserContentByDateJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetUserContentByDateJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentByDateJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserContentByDateJsonQueryParams;

  @Metadata()
  security: GetUserContentByDateJsonSecurity;
}


export class GetUserContentByDateJson200ApplicationJsonDebug extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentByDateJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @Metadata({ data: "json, name=assetID" })
  assetId?: number;

  @Metadata({ data: "json, name=assetURL" })
  assetUrl?: string;

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

  @Metadata({ data: "json, name=editorsSelection" })
  editorsSelection?: number;

  @Metadata({ data: "json, name=lft" })
  lft?: number;

  @Metadata({ data: "json, name=parentID" })
  parentId?: any;

  @Metadata({ data: "json, name=recommendationCount" })
  recommendationCount?: number;

  @Metadata({ data: "json, name=replies" })
  replies?: Map<string, any>[];

  @Metadata({ data: "json, name=replyCount" })
  replyCount?: number;

  @Metadata({ data: "json, name=rgt" })
  rgt?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=statusID" })
  statusId?: number;

  @Metadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @Metadata({ data: "json, name=userDisplayName" })
  userDisplayName?: string;

  @Metadata({ data: "json, name=userID" })
  userId?: number;

  @Metadata({ data: "json, name=userLocation" })
  userLocation?: string;

  @Metadata({ data: "json, name=userTitle" })
  userTitle?: string;

  @Metadata({ data: "json, name=userURL" })
  userUrl?: number;
}


export class GetUserContentByDateJson200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @Metadata({ data: "json, name=comments", elemType: operations.GetUserContentByDateJson200ApplicationJsonResultsComments })
  comments?: GetUserContentByDateJson200ApplicationJsonResultsComments[];

  @Metadata({ data: "json, name=totalCommentsFound" })
  totalCommentsFound?: number;

  @Metadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;
}


export class GetUserContentByDateJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=debug" })
  debug?: GetUserContentByDateJson200ApplicationJsonDebug;

  @Metadata({ data: "json, name=results" })
  results?: GetUserContentByDateJson200ApplicationJsonResults;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentByDateJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUserContentByDateJson200ApplicationJsonObject?: GetUserContentByDateJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
