import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NotebooksProjectsLocationsInstancesIsUpgradeablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=notebookInstance" })
  notebookInstance: string;
}

export enum NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED"
,    UpgradeFramework = "UPGRADE_FRAMEWORK"
,    UpgradeOs = "UPGRADE_OS"
,    UpgradeCuda = "UPGRADE_CUDA"
,    UpgradeAll = "UPGRADE_ALL"
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NotebooksProjectsLocationsInstancesIsUpgradeablePathParams;

  @Metadata()
  queryParams: NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams;

  @Metadata()
  security: NotebooksProjectsLocationsInstancesIsUpgradeableSecurity;
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  isInstanceUpgradeableResponse?: shared.IsInstanceUpgradeableResponse;

  @Metadata()
  statusCode: number;
}
