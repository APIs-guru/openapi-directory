import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VaultMattersGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=matterId" })
  matterId: string;
}

export enum VaultMattersGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


export class VaultMattersGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: VaultMattersGetViewEnum;
}


export class VaultMattersGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: VaultMattersGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: VaultMattersGetSecurityOption2;
}


export class VaultMattersGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VaultMattersGetPathParams;

  @Metadata()
  queryParams: VaultMattersGetQueryParams;

  @Metadata()
  security: VaultMattersGetSecurity;
}


export class VaultMattersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  matter?: shared.Matter;

  @Metadata()
  statusCode: number;
}
