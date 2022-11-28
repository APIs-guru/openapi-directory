import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum MybusinessbusinessinformationCategoriesBatchGetViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


export class MybusinessbusinessinformationCategoriesBatchGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=names" })
  names?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: MybusinessbusinessinformationCategoriesBatchGetViewEnum;
}


export class MybusinessbusinessinformationCategoriesBatchGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MybusinessbusinessinformationCategoriesBatchGetQueryParams;
}


export class MybusinessbusinessinformationCategoriesBatchGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchGetCategoriesResponse?: shared.BatchGetCategoriesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
