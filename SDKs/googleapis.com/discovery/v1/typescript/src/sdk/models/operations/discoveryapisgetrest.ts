import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscoveryApisGetRestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class DiscoveryApisGetRestQueryParams extends SpeakeasyBase {
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


export class DiscoveryApisGetRestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DiscoveryApisGetRestPathParams;

  @Metadata()
  queryParams: DiscoveryApisGetRestQueryParams;
}


export class DiscoveryApisGetRestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  restDescription?: shared.RestDescription;

  @Metadata()
  statusCode: number;
}
