import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPackagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPackagesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetPackagesSecurity;
}


export class GetPackagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PackageInfo })
  packageInfos?: shared.PackageInfo[];

  @Metadata()
  statusCode: number;
}
