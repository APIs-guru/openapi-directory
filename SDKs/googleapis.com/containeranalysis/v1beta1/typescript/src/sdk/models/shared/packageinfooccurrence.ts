import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { License } from "./license";


// PackageInfoOccurrence
/** 
 * PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export class PackageInfoOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=homePage" })
  homePage?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=licenseConcluded" })
  licenseConcluded?: License;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=sourceInfo" })
  sourceInfo?: string;

  @Metadata({ data: "json, name=summaryDescription" })
  summaryDescription?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
