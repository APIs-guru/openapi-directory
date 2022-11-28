import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cryptoKeyId" })
  cryptoKeyId?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skipInitialVersionCreation" })
  skipInitialVersionCreation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CryptoKeyInput;

  @SpeakeasyMetadata()
  security: CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  cryptoKey?: shared.CryptoKey;

  @SpeakeasyMetadata()
  statusCode: number;
}
