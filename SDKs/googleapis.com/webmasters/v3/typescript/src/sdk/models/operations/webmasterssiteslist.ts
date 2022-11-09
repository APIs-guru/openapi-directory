import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WebmastersSitesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class WebmastersSitesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSitesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebmastersSitesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: WebmastersSitesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: WebmastersSitesListSecurityOption2;
}


export class WebmastersSitesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WebmastersSitesListQueryParams;

  @Metadata()
  security: WebmastersSitesListSecurity;
}


export class WebmastersSitesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sitesListResponse?: shared.SitesListResponse;

  @Metadata()
  statusCode: number;
}
