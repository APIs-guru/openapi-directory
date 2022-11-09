import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum MybusinessbusinessinformationCategoriesBatchGetViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


export class MybusinessbusinessinformationCategoriesBatchGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=names" })
  names?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: MybusinessbusinessinformationCategoriesBatchGetViewEnum;
}


export class MybusinessbusinessinformationCategoriesBatchGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MybusinessbusinessinformationCategoriesBatchGetQueryParams;
}


export class MybusinessbusinessinformationCategoriesBatchGetResponse extends SpeakeasyBase {
  @Metadata()
  batchGetCategoriesResponse?: shared.BatchGetCategoriesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
