import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPackageInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPackageInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assemblyGuid" })
  assemblyGuid?: string;
}


export class GetPackageInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPackageInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPackageInfoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPackageInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetPackageInfoSecurity;
}


export class GetPackageInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  packageInfo?: shared.PackageInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
