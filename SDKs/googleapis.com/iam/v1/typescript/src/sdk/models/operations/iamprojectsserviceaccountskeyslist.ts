import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IamProjectsServiceAccountsKeysListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum IamProjectsServiceAccountsKeysListKeyTypesEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED",
    UserManaged = "USER_MANAGED",
    SystemManaged = "SYSTEM_MANAGED"
}


export class IamProjectsServiceAccountsKeysListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyTypes" })
  keyTypes?: IamProjectsServiceAccountsKeysListKeyTypesEnum[];

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


export class IamProjectsServiceAccountsKeysListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class IamProjectsServiceAccountsKeysListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IamProjectsServiceAccountsKeysListPathParams;

  @SpeakeasyMetadata()
  queryParams: IamProjectsServiceAccountsKeysListQueryParams;

  @SpeakeasyMetadata()
  security: IamProjectsServiceAccountsKeysListSecurity;
}


export class IamProjectsServiceAccountsKeysListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceAccountKeysResponse?: shared.ListServiceAccountKeysResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
