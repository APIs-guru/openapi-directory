import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=caPool" })
  caPool: string;
}


export class PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams extends SpeakeasyBase {
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


export class PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PrivatecaProjectsLocationsCaPoolsFetchCaCertsPathParams;

  @Metadata()
  queryParams: PrivatecaProjectsLocationsCaPoolsFetchCaCertsQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FetchCaCertsRequest;

  @Metadata()
  security: PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity;
}


export class PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fetchCaCertsResponse?: shared.FetchCaCertsResponse;

  @Metadata()
  statusCode: number;
}
