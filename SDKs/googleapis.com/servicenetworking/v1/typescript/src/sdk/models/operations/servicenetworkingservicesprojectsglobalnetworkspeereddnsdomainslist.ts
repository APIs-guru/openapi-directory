import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams extends SpeakeasyBase {
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


export class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2;
}


export class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams;

  @Metadata()
  queryParams: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams;

  @Metadata()
  security: ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity;
}


export class ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPeeredDnsDomainsResponse?: shared.ListPeeredDnsDomainsResponse;

  @Metadata()
  statusCode: number;
}
