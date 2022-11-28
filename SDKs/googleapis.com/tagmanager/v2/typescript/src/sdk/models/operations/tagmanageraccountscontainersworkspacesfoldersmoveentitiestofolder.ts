import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagId" })
  tagId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=triggerId" })
  triggerId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variableId" })
  variableId?: string[];
}


export class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderPathParams;

  @SpeakeasyMetadata()
  queryParams: TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Folder;

  @SpeakeasyMetadata()
  security: TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderSecurity;
}


export class TagmanagerAccountsContainersWorkspacesFoldersMoveEntitiesToFolderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
