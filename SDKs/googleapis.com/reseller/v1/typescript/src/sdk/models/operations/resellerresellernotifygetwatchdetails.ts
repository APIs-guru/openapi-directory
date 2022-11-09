import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResellerResellernotifyGetwatchdetailsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ResellerResellernotifyGetwatchdetailsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ResellerResellernotifyGetwatchdetailsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ResellerResellernotifyGetwatchdetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ResellerResellernotifyGetwatchdetailsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ResellerResellernotifyGetwatchdetailsSecurityOption2;
}


export class ResellerResellernotifyGetwatchdetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ResellerResellernotifyGetwatchdetailsQueryParams;

  @Metadata()
  security: ResellerResellernotifyGetwatchdetailsSecurity;
}


export class ResellerResellernotifyGetwatchdetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resellernotifyGetwatchdetailsResponse?: shared.ResellernotifyGetwatchdetailsResponse;

  @Metadata()
  statusCode: number;
}
