import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientCertificate.passphrase" })
  clientCertificatePassphrase?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientCertificate.sslCertificate" })
  clientCertificateSslCertificate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput;

  @SpeakeasyMetadata()
  security: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity;
}


export class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudIntegrationsV1alphaSfdcChannel?: shared.GoogleCloudIntegrationsV1alphaSfdcChannel;

  @SpeakeasyMetadata()
  statusCode: number;
}
