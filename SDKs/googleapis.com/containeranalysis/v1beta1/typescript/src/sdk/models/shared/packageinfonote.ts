import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExternalRef } from "./externalref";
import { License } from "./license";


// PackageInfoNote
/** 
 * PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export class PackageInfoNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzed" })
  analyzed?: boolean;

  @Metadata({ data: "json, name=attribution" })
  attribution?: string;

  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=detailedDescription" })
  detailedDescription?: string;

  @Metadata({ data: "json, name=downloadLocation" })
  downloadLocation?: string;

  @Metadata({ data: "json, name=externalRefs", elemType: shared.ExternalRef })
  externalRefs?: ExternalRef[];

  @Metadata({ data: "json, name=filesLicenseInfo" })
  filesLicenseInfo?: string[];

  @Metadata({ data: "json, name=homePage" })
  homePage?: string;

  @Metadata({ data: "json, name=licenseDeclared" })
  licenseDeclared?: License;

  @Metadata({ data: "json, name=originator" })
  originator?: string;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=summaryDescription" })
  summaryDescription?: string;

  @Metadata({ data: "json, name=supplier" })
  supplier?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=verificationCode" })
  verificationCode?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
