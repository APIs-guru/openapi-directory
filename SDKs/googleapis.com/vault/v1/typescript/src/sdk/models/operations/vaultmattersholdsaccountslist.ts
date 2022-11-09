import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VaultMattersHoldsAccountsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=holdId" })
  holdId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=matterId" })
  matterId: string;
}


export class VaultMattersHoldsAccountsListQueryParams extends SpeakeasyBase {
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
}


export class VaultMattersHoldsAccountsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersHoldsAccountsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VaultMattersHoldsAccountsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: VaultMattersHoldsAccountsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: VaultMattersHoldsAccountsListSecurityOption2;
}


export class VaultMattersHoldsAccountsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VaultMattersHoldsAccountsListPathParams;

  @Metadata()
  queryParams: VaultMattersHoldsAccountsListQueryParams;

  @Metadata()
  security: VaultMattersHoldsAccountsListSecurity;
}


export class VaultMattersHoldsAccountsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listHeldAccountsResponse?: shared.ListHeldAccountsResponse;

  @Metadata()
  statusCode: number;
}
