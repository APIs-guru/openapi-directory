import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudassetProjectsBatchGetAssetsHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    Resource = "RESOURCE",
    IamPolicy = "IAM_POLICY"
}


export class CloudassetProjectsBatchGetAssetsHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetNames" })
  assetNames?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentType" })
  contentType?: CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.endTime" })
  readTimeWindowEndTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.startTime" })
  readTimeWindowStartTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudassetProjectsBatchGetAssetsHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudassetProjectsBatchGetAssetsHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudassetProjectsBatchGetAssetsHistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudassetProjectsBatchGetAssetsHistoryQueryParams;

  @SpeakeasyMetadata()
  security: CloudassetProjectsBatchGetAssetsHistorySecurity;
}


export class CloudassetProjectsBatchGetAssetsHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetAssetsHistoryResponse?: shared.BatchGetAssetsHistoryResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
