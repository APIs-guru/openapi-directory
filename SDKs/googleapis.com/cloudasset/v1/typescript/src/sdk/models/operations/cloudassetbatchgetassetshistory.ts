import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudassetBatchGetAssetsHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum CloudassetBatchGetAssetsHistoryContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"
,    Resource = "RESOURCE"
,    IamPolicy = "IAM_POLICY"
,    OrgPolicy = "ORG_POLICY"
,    AccessPolicy = "ACCESS_POLICY"
,    OsInventory = "OS_INVENTORY"
,    Relationship = "RELATIONSHIP"
}


export class CloudassetBatchGetAssetsHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=assetNames" })
  assetNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: CloudassetBatchGetAssetsHistoryContentTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.endTime" })
  readTimeWindowEndTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.startTime" })
  readTimeWindowStartTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=relationshipTypes" })
  relationshipTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudassetBatchGetAssetsHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudassetBatchGetAssetsHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudassetBatchGetAssetsHistoryPathParams;

  @Metadata()
  queryParams: CloudassetBatchGetAssetsHistoryQueryParams;

  @Metadata()
  security: CloudassetBatchGetAssetsHistorySecurity;
}


export class CloudassetBatchGetAssetsHistoryResponse extends SpeakeasyBase {
  @Metadata()
  batchGetAssetsHistoryResponse?: shared.BatchGetAssetsHistoryResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
