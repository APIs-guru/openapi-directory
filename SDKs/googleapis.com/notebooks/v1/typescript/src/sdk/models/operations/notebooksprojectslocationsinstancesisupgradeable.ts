import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NotebooksProjectsLocationsInstancesIsUpgradeablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=notebookInstance" })
  notebookInstance: string;
}

export enum NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED",
    UpgradeFramework = "UPGRADE_FRAMEWORK",
    UpgradeOs = "UPGRADE_OS",
    UpgradeCuda = "UPGRADE_CUDA",
    UpgradeAll = "UPGRADE_ALL"
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NotebooksProjectsLocationsInstancesIsUpgradeablePathParams;

  @SpeakeasyMetadata()
  queryParams: NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams;

  @SpeakeasyMetadata()
  security: NotebooksProjectsLocationsInstancesIsUpgradeableSecurity;
}


export class NotebooksProjectsLocationsInstancesIsUpgradeableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  isInstanceUpgradeableResponse?: shared.IsInstanceUpgradeableResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
