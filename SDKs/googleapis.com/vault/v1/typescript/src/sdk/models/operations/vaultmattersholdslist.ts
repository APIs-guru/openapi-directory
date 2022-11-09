import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VaultMattersHoldsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=matterId" })
  matterId: string;
}

export enum VaultMattersHoldsListViewEnum {
    HoldViewUnspecified = "HOLD_VIEW_UNSPECIFIED"
,    BasicHold = "BASIC_HOLD"
,    FullHold = "FULL_HOLD"
}


export class VaultMattersHoldsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: VaultMattersHoldsListViewEnum;
}


export class VaultMattersHoldsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersHoldsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersHoldsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: VaultMattersHoldsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: VaultMattersHoldsListSecurityOption2;
}


export class VaultMattersHoldsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VaultMattersHoldsListPathParams;

  @Metadata()
  queryParams: VaultMattersHoldsListQueryParams;

  @Metadata()
  security: VaultMattersHoldsListSecurity;
}


export class VaultMattersHoldsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHoldsResponse?: shared.ListHoldsResponse;

  @Metadata()
  statusCode: number;
}
