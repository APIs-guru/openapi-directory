import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserContentRecentJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentRecentJsonRequest extends SpeakeasyBase {
  @Metadata()
  security: GetUserContentRecentJsonSecurity;
}


export class GetUserContentRecentJson200ApplicationJsonDebug extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, any>[];
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: number;

  @Metadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: number;

  @Metadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: number;

  @Metadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=automoderation-on" })
  automoderationOn?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn;

  @Metadata({ data: "json, name=comment-list-sort-editors" })
  commentListSortEditors?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors;

  @Metadata({ data: "json, name=reached-max-com-off" })
  reachedMaxComOff?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=all-properties", elemType: operations.GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties })
  allProperties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties[];

  @Metadata({ data: "json, name=assetID" })
  assetId?: number;

  @Metadata({ data: "json, name=assetTitle" })
  assetTitle?: string;

  @Metadata({ data: "json, name=assetURL" })
  assetUrl?: string;

  @Metadata({ data: "json, name=createDate" })
  createDate?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>[];

  @Metadata({ data: "json, name=properties" })
  properties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=taxonomy" })
  taxonomy?: string;

  @Metadata({ data: "json, name=text" })
  text?: Map<string, any>[];

  @Metadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @Metadata({ data: "json, name=vendorID" })
  vendorId?: string;
}


export class GetUserContentRecentJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @Metadata({ data: "json, name=asset" })
  asset?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset;

  @Metadata({ data: "json, name=assetID" })
  assetId?: number;

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

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=editorsSelection" })
  editorsSelection?: number;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=parentID" })
  parentId?: any;

  @Metadata({ data: "json, name=recommendationCount" })
  recommendationCount?: number;

  @Metadata({ data: "json, name=replies" })
  replies?: Map<string, any>[];

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
  userUrl?: string;
}


export class GetUserContentRecentJson200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @Metadata({ data: "json, name=comments", elemType: operations.GetUserContentRecentJson200ApplicationJsonResultsComments })
  comments?: GetUserContentRecentJson200ApplicationJsonResultsComments[];

  @Metadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;
}


export class GetUserContentRecentJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=debug" })
  debug?: GetUserContentRecentJson200ApplicationJsonDebug;

  @Metadata({ data: "json, name=results" })
  results?: GetUserContentRecentJson200ApplicationJsonResults;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentRecentJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUserContentRecentJson200ApplicationJsonObject?: GetUserContentRecentJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
