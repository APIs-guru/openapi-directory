import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudsearchStatsGetSearchapplicationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.day" })
  endDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.month" })
  endDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate.year" })
  endDateYear?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.day" })
  startDateDay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.month" })
  startDateMonth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate.year" })
  startDateYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudsearchStatsGetSearchapplicationSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsGetSearchapplicationSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsGetSearchapplicationSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchStatsGetSearchapplicationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudsearchStatsGetSearchapplicationSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudsearchStatsGetSearchapplicationSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: CloudsearchStatsGetSearchapplicationSecurityOption3;
}


export class CloudsearchStatsGetSearchapplicationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CloudsearchStatsGetSearchapplicationQueryParams;

  @Metadata()
  security: CloudsearchStatsGetSearchapplicationSecurity;
}


export class CloudsearchStatsGetSearchapplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCustomerSearchApplicationStatsResponse?: shared.GetCustomerSearchApplicationStatsResponse;

  @Metadata()
  statusCode: number;
}
