import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserContentUserJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class GetUserContentUserJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentUserJson200ApplicationJsonDebug extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, any>[];
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelID" })
  labelId?: number;

  @SpeakeasyMetadata({ data: "json, name=labelName" })
  labelName?: string;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automoderation-off" })
  automoderationOff?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff;

  @SpeakeasyMetadata({ data: "json, name=comment-list-sort-approvedate-desc" })
  commentListSortApprovedateDesc?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc;

  @SpeakeasyMetadata({ data: "json, name=reached-max-com-on" })
  reachedMaxComOn?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all-properties", elemType: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties })
  allProperties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties[];

  @SpeakeasyMetadata({ data: "json, name=assetID" })
  assetId?: number;

  @SpeakeasyMetadata({ data: "json, name=assetTitle" })
  assetTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=assetURL" })
  assetUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=createDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels })
  labels?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels[];

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties;

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


export class GetUserContentUserJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: GetUserContentUserJson200ApplicationJsonResultsCommentsAsset;

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

  @SpeakeasyMetadata({ data: "json, name=editorsSelection" })
  editorsSelection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=parentID" })
  parentId?: any;

  @SpeakeasyMetadata({ data: "json, name=permid" })
  permid?: number;

  @SpeakeasyMetadata({ data: "json, name=picURL" })
  picUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendations" })
  recommendations?: number;

  @SpeakeasyMetadata({ data: "json, name=replies" })
  replies?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=replyCount" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=userDisplayName" })
  userDisplayName?: any;

  @SpeakeasyMetadata({ data: "json, name=userID" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=userLocation" })
  userLocation?: any;

  @SpeakeasyMetadata({ data: "json, name=userSubmittedDisplayName" })
  userSubmittedDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=userSubmittedLocation" })
  userSubmittedLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=userSubmittedTitle" })
  userSubmittedTitle?: any;

  @SpeakeasyMetadata({ data: "json, name=userSubmittedURL" })
  userSubmittedUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=userTitle" })
  userTitle?: any;

  @SpeakeasyMetadata({ data: "json, name=userURL" })
  userUrl?: any;
}


export class GetUserContentUserJson200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=comments", elemType: GetUserContentUserJson200ApplicationJsonResultsComments })
  comments?: GetUserContentUserJson200ApplicationJsonResultsComments[];

  @SpeakeasyMetadata({ data: "json, name=totalCommentsFound" })
  totalCommentsFound?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;
}


export class GetUserContentUserJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=debug" })
  debug?: GetUserContentUserJson200ApplicationJsonDebug;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetUserContentUserJson200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentUserJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserContentUserJsonQueryParams;

  @SpeakeasyMetadata()
  security: GetUserContentUserJsonSecurity;
}


export class GetUserContentUserJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserContentUserJson200ApplicationJsonObject?: GetUserContentUserJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
