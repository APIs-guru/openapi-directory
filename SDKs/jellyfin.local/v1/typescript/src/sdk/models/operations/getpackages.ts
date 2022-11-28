import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPackagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPackagesSecurity;
}


export class GetPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PackageInfo })
  packageInfos?: shared.PackageInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
