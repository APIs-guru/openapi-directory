import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserContentRecentJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentRecentJson200ApplicationJsonDebug extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, any>[];
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automoderation-on" })
  automoderationOn?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOn;

  @SpeakeasyMetadata({ data: "json, name=comment-list-sort-editors" })
  commentListSortEditors?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortEditors;

  @SpeakeasyMetadata({ data: "json, name=reached-max-com-off" })
  reachedMaxComOff?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOff;
}


export class GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all-properties", elemType: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties })
  allProperties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetAllProperties[];

  @SpeakeasyMetadata({ data: "json, name=assetID" })
  assetId?: number;

  @SpeakeasyMetadata({ data: "json, name=assetTitle" })
  assetTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=assetURL" })
  assetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAssetProperties;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomy" })
  taxonomy?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=vendorID" })
  vendorId?: string;
}


export class GetUserContentRecentJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: GetUserContentRecentJson200ApplicationJsonResultsCommentsAsset;

  @SpeakeasyMetadata({ data: "json, name=assetID" })
  assetId?: number;

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

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=editorsSelection" })
  editorsSelection?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=parentID" })
  parentId?: any;

  @SpeakeasyMetadata({ data: "json, name=recommendationCount" })
  recommendationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=replies" })
  replies?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusID" })
  statusId?: number;

  @SpeakeasyMetadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=userDisplayName" })
  userDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=userID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=userLocation" })
  userLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=userTitle" })
  userTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=userURL" })
  userUrl?: string;
}


export class GetUserContentRecentJson200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentRecentJson200ApplicationJsonResultsComments })
  comments?: GetUserContentRecentJson200ApplicationJsonResultsComments[];

  @SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;
}


export class GetUserContentRecentJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: GetUserContentRecentJson200ApplicationJsonDebug;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetUserContentRecentJson200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentRecentJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetUserContentRecentJsonSecurity;
}


export class GetUserContentRecentJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserContentRecentJson200ApplicationJsonObject?: GetUserContentRecentJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
