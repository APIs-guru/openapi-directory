import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum IntegrationsCallbackGenerateTokenProductEnum {
    UnspecifiedProduct = "UNSPECIFIED_PRODUCT"
,    Ip = "IP"
,    Apigee = "APIGEE"
,    Security = "SECURITY"
}


export class IntegrationsCallbackGenerateTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gcpProjectId" })
  gcpProjectId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product" })
  product?: IntegrationsCallbackGenerateTokenProductEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=redirectUri" })
  redirectUri?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class IntegrationsCallbackGenerateTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IntegrationsCallbackGenerateTokenRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: IntegrationsCallbackGenerateTokenQueryParams;

  @Metadata()
  security: IntegrationsCallbackGenerateTokenSecurity;
}


export class IntegrationsCallbackGenerateTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudIntegrationsV1alphaGenerateTokenResponse?: shared.GoogleCloudIntegrationsV1alphaGenerateTokenResponse;

  @Metadata()
  statusCode: number;
}
