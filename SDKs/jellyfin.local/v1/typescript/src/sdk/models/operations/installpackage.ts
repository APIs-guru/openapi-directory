import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InstallPackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class InstallPackageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assemblyGuid" })
  assemblyGuid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repositoryUrl" })
  repositoryUrl?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class InstallPackageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class InstallPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstallPackagePathParams;

  @SpeakeasyMetadata()
  queryParams: InstallPackageQueryParams;

  @SpeakeasyMetadata()
  security: InstallPackageSecurity;
}


export class InstallPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
