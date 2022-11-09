import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InstallPackagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class InstallPackageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=assemblyGuid" })
  assemblyGuid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repositoryUrl" })
  repositoryUrl?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class InstallPackageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class InstallPackageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InstallPackagePathParams;

  @Metadata()
  queryParams: InstallPackageQueryParams;

  @Metadata()
  security: InstallPackageSecurity;
}


export class InstallPackageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
