import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption2;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AsymmetricSignRequest;

  @SpeakeasyMetadata()
  security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asymmetricSignResponse?: shared.AsymmetricSignResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
