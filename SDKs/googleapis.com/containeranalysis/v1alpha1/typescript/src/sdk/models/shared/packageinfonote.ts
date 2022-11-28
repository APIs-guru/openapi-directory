import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalRef } from "./externalref";
import { License } from "./license";



// PackageInfoNote
/** 
 * PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export class PackageInfoNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzed" })
  analyzed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attribution" })
  attribution?: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedDescription" })
  detailedDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadLocation" })
  downloadLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=externalRefs", elemType: ExternalRef })
  externalRefs?: ExternalRef[];

  @SpeakeasyMetadata({ data: "json, name=filesLicenseInfo" })
  filesLicenseInfo?: string[];

  @SpeakeasyMetadata({ data: "json, name=homePage" })
  homePage?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseDeclared" })
  licenseDeclared?: License;

  @SpeakeasyMetadata({ data: "json, name=originator" })
  originator?: string;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=summaryDescription" })
  summaryDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=verificationCode" })
  verificationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
