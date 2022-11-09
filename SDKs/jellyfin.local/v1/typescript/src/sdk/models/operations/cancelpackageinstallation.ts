import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelPackageInstallationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=packageId" })
  packageId: string;
}


export class CancelPackageInstallationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CancelPackageInstallationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelPackageInstallationPathParams;

  @Metadata()
  security: CancelPackageInstallationSecurity;
}


export class CancelPackageInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
