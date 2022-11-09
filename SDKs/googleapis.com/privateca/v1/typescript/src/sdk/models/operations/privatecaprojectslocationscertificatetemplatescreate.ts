import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=certificateTemplateId" })
  certificateTemplateId?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=requestId" })
  requestId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PrivatecaProjectsLocationsCertificateTemplatesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams;

  @Metadata()
  queryParams: PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CertificateTemplate;

  @Metadata()
  security: PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity;
}


export class PrivatecaProjectsLocationsCertificateTemplatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  operation?: shared.Operation;

  @Metadata()
  statusCode: number;
}
