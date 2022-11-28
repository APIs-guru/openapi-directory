import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudsearchStatsQuerySearchapplicationsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudsearchStatsQuerySearchapplicationsGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.day" })
  fromDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.month" })
  fromDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.year" })
  fromDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.day" })
  toDateDay?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.month" })
  toDateMonth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.year" })
  toDateYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudsearchStatsQuerySearchapplicationsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsQuerySearchapplicationsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsQuerySearchapplicationsGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsQuerySearchapplicationsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudsearchStatsQuerySearchapplicationsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudsearchStatsQuerySearchapplicationsGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CloudsearchStatsQuerySearchapplicationsGetSecurityOption3;
}


export class CloudsearchStatsQuerySearchapplicationsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudsearchStatsQuerySearchapplicationsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudsearchStatsQuerySearchapplicationsGetQueryParams;

  @SpeakeasyMetadata()
  security: CloudsearchStatsQuerySearchapplicationsGetSecurity;
}


export class CloudsearchStatsQuerySearchapplicationsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSearchApplicationQueryStatsResponse?: shared.GetSearchApplicationQueryStatsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
