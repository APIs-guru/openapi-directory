import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudsearchStatsSessionSearchapplicationsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudsearchStatsSessionSearchapplicationsGetQueryParams extends SpeakeasyBase {
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


export class CloudsearchStatsSessionSearchapplicationsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsSessionSearchapplicationsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsSessionSearchapplicationsGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsSessionSearchapplicationsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption3;
}


export class CloudsearchStatsSessionSearchapplicationsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudsearchStatsSessionSearchapplicationsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudsearchStatsSessionSearchapplicationsGetQueryParams;

  @SpeakeasyMetadata()
  security: CloudsearchStatsSessionSearchapplicationsGetSecurity;
}


export class CloudsearchStatsSessionSearchapplicationsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSearchApplicationSessionStatsResponse?: shared.GetSearchApplicationSessionStatsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
