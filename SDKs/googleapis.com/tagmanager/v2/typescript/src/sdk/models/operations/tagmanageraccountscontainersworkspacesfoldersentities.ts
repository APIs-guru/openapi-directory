import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagmanagerAccountsContainersWorkspacesFoldersEntitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class TagmanagerAccountsContainersWorkspacesFoldersEntitiesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurityOption2;
}


export class TagmanagerAccountsContainersWorkspacesFoldersEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagmanagerAccountsContainersWorkspacesFoldersEntitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: TagmanagerAccountsContainersWorkspacesFoldersEntitiesQueryParams;

  @SpeakeasyMetadata()
  security: TagmanagerAccountsContainersWorkspacesFoldersEntitiesSecurity;
}


export class TagmanagerAccountsContainersWorkspacesFoldersEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folderEntities?: shared.FolderEntities;

  @SpeakeasyMetadata()
  statusCode: number;
}
