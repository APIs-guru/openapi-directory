import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppliedLicenseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    None = "NONE",
    Payg = "PAYG",
    Byol = "BYOL"
}


// AppliedLicense
/** 
 * AppliedLicense holds the license data returned by adaptation module report.
**/
export class AppliedLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osLicense" })
  osLicense?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AppliedLicenseTypeEnum;
}
