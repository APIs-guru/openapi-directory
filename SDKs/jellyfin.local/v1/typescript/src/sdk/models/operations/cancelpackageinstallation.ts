import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelPackageInstallationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageId" })
  packageId: string;
}


export class CancelPackageInstallationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CancelPackageInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelPackageInstallationPathParams;

  @SpeakeasyMetadata()
  security: CancelPackageInstallationSecurity;
}


export class CancelPackageInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
