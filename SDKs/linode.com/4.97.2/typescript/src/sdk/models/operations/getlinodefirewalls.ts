import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeFirewallsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeFirewallsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetLinodeFirewallsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeFirewallsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeFirewallsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeFirewallsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeFirewallsSecurityOption2;
}


export class GetLinodeFirewallsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeFirewallsPathParams;

  @Metadata()
  queryParams: GetLinodeFirewallsQueryParams;

  @Metadata()
  security: GetLinodeFirewallsSecurity;
}


export class GetLinodeFirewalls200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Firewall })
  data?: shared.Firewall[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLinodeFirewallsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeFirewallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeFirewalls200ApplicationJsonObject?: GetLinodeFirewalls200ApplicationJson;

  @Metadata()
  getLinodeFirewallsDefaultApplicationJsonObject?: GetLinodeFirewallsDefaultApplicationJson;
}
