import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CryptoKeyVersionInput;

  @SpeakeasyMetadata()
  security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  cryptoKeyVersion?: shared.CryptoKeyVersion;

  @SpeakeasyMetadata()
  statusCode: number;
}
