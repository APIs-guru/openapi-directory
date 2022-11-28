import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" })
  advertiserId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keywordValue" })
  keywordValue: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=negativeKeywordListId" })
  negativeKeywordListId: string;
}


export class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams;

  @SpeakeasyMetadata()
  security: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity;
}


export class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
