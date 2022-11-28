import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudkmsProjectsLocationsKeyRingsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudkmsProjectsLocationsKeyRingsCreateQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyRingId" })
  keyRingId?: string;

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


export class CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2;
}


export class CloudkmsProjectsLocationsKeyRingsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudkmsProjectsLocationsKeyRingsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: CloudkmsProjectsLocationsKeyRingsCreateQueryParams;

  @SpeakeasyMetadata()
  security: CloudkmsProjectsLocationsKeyRingsCreateSecurity;
}


export class CloudkmsProjectsLocationsKeyRingsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keyRing?: shared.KeyRing;

  @SpeakeasyMetadata()
  statusCode: number;
}
