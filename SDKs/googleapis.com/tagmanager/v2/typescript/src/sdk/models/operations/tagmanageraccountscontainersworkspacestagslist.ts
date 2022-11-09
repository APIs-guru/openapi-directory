import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagmanagerAccountsContainersWorkspacesTagsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class TagmanagerAccountsContainersWorkspacesTagsListQueryParams extends SpeakeasyBase {
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
}


export class TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsContainersWorkspacesTagsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: TagmanagerAccountsContainersWorkspacesTagsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: TagmanagerAccountsContainersWorkspacesTagsListSecurityOption2;
}


export class TagmanagerAccountsContainersWorkspacesTagsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagmanagerAccountsContainersWorkspacesTagsListPathParams;

  @Metadata()
  queryParams: TagmanagerAccountsContainersWorkspacesTagsListQueryParams;

  @Metadata()
  security: TagmanagerAccountsContainersWorkspacesTagsListSecurity;
}


export class TagmanagerAccountsContainersWorkspacesTagsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTagsResponse?: shared.ListTagsResponse;

  @Metadata()
  statusCode: number;
}
