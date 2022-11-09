import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserContentUserJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userID" })
  userId?: number;
}


export class GetUserContentUserJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserContentUserJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserContentUserJsonQueryParams;

  @Metadata()
  security: GetUserContentUserJsonSecurity;
}


export class GetUserContentUserJson200ApplicationJsonDebug extends SpeakeasyBase {
  @Metadata({ data: "json, name=version" })
  version?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, any>[];
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelID" })
  labelId?: number;

  @Metadata({ data: "json, name=labelName" })
  labelName?: string;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: number;

  @Metadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: number;

  @Metadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupID" })
  groupId?: number;

  @Metadata({ data: "json, name=taxonomyID" })
  taxonomyId?: number;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=automoderation-off" })
  automoderationOff?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesAutomoderationOff;

  @Metadata({ data: "json, name=comment-list-sort-approvedate-desc" })
  commentListSortApprovedateDesc?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesCommentListSortApprovedateDesc;

  @Metadata({ data: "json, name=reached-max-com-on" })
  reachedMaxComOn?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetPropertiesReachedMaxComOn;
}


export class GetUserContentUserJson200ApplicationJsonResultsCommentsAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=all-properties", elemType: operations.GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties })
  allProperties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetAllProperties[];

  @Metadata({ data: "json, name=assetID" })
  assetId?: number;

  @Metadata({ data: "json, name=assetTitle" })
  assetTitle?: string;

  @Metadata({ data: "json, name=assetURL" })
  assetUrl?: string;

  @Metadata({ data: "json, name=createDate" })
  createDate?: string;

  @Metadata({ data: "json, name=labels", elemType: operations.GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels })
  labels?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetLabels[];

  @Metadata({ data: "json, name=properties" })
  properties?: GetUserContentUserJson200ApplicationJsonResultsCommentsAssetProperties;

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


export class GetUserContentUserJson200ApplicationJsonResultsComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=approveDate" })
  approveDate?: string;

  @Metadata({ data: "json, name=asset" })
  asset?: GetUserContentUserJson200ApplicationJsonResultsCommentsAsset;

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
  editorsSelection?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>[];

  @Metadata({ data: "json, name=parentID" })
  parentId?: any;

  @Metadata({ data: "json, name=permid" })
  permid?: number;

  @Metadata({ data: "json, name=picURL" })
  picUrl?: string;

  @Metadata({ data: "json, name=recommendations" })
  recommendations?: number;

  @Metadata({ data: "json, name=replies" })
  replies?: Map<string, any>[];

  @Metadata({ data: "json, name=replyCount" })
  replyCount?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updateDate" })
  updateDate?: string;

  @Metadata({ data: "json, name=userDisplayName" })
  userDisplayName?: any;

  @Metadata({ data: "json, name=userID" })
  userId?: number;

  @Metadata({ data: "json, name=userLocation" })
  userLocation?: any;

  @Metadata({ data: "json, name=userSubmittedDisplayName" })
  userSubmittedDisplayName?: string;

  @Metadata({ data: "json, name=userSubmittedLocation" })
  userSubmittedLocation?: string;

  @Metadata({ data: "json, name=userSubmittedTitle" })
  userSubmittedTitle?: any;

  @Metadata({ data: "json, name=userSubmittedURL" })
  userSubmittedUrl?: any;

  @Metadata({ data: "json, name=userTitle" })
  userTitle?: any;

  @Metadata({ data: "json, name=userURL" })
  userUrl?: any;
}


export class GetUserContentUserJson200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_timestamp" })
  apiTimestamp?: string;

  @Metadata({ data: "json, name=comments", elemType: operations.GetUserContentUserJson200ApplicationJsonResultsComments })
  comments?: GetUserContentUserJson200ApplicationJsonResultsComments[];

  @Metadata({ data: "json, name=totalCommentsFound" })
  totalCommentsFound?: number;

  @Metadata({ data: "json, name=totalCommentsReturned" })
  totalCommentsReturned?: number;
}


export class GetUserContentUserJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=debug" })
  debug?: GetUserContentUserJson200ApplicationJsonDebug;

  @Metadata({ data: "json, name=results" })
  results?: GetUserContentUserJson200ApplicationJsonResults;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetUserContentUserJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUserContentUserJson200ApplicationJsonObject?: GetUserContentUserJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
