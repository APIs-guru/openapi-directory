import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPackageInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPackageInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=assemblyGuid" })
  assemblyGuid?: string;
}


export class GetPackageInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPackageInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPackageInfoPathParams;

  @Metadata()
  queryParams: GetPackageInfoQueryParams;

  @Metadata()
  security: GetPackageInfoSecurity;
}


export class GetPackageInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  packageInfo?: shared.PackageInfo;

  @Metadata()
  statusCode: number;
}
