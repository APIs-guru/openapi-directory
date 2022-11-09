import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VaultMattersHoldsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=holdId" })
  holdId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=matterId" })
  matterId: string;
}

export enum VaultMattersHoldsGetViewEnum {
    HoldViewUnspecified = "HOLD_VIEW_UNSPECIFIED"
,    BasicHold = "BASIC_HOLD"
,    FullHold = "FULL_HOLD"
}


export class VaultMattersHoldsGetQueryParams extends SpeakeasyBase {
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
  view?: VaultMattersHoldsGetViewEnum;
}


export class VaultMattersHoldsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersHoldsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersHoldsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: VaultMattersHoldsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: VaultMattersHoldsGetSecurityOption2;
}


export class VaultMattersHoldsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VaultMattersHoldsGetPathParams;

  @Metadata()
  queryParams: VaultMattersHoldsGetQueryParams;

  @Metadata()
  security: VaultMattersHoldsGetSecurity;
}


export class VaultMattersHoldsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hold?: shared.Hold;

  @Metadata()
  statusCode: number;
}
