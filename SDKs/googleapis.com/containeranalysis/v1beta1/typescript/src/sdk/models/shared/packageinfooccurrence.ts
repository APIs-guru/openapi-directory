import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";



// PackageInfoOccurrence
/** 
 * PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export class PackageInfoOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=homePage" })
  homePage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseConcluded" })
  licenseConcluded?: License;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceInfo" })
  sourceInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=summaryDescription" })
  summaryDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// PackageInfoOccurrenceInput
/** 
 * PackageInfoOccurrence represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
**/
export class PackageInfoOccurrenceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseConcluded" })
  licenseConcluded?: License;

  @SpeakeasyMetadata({ data: "json, name=sourceInfo" })
  sourceInfo?: string;
}
