import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppliedLicenseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    None = "NONE"
,    Payg = "PAYG"
,    Byol = "BYOL"
}


// AppliedLicense
/** 
 * AppliedLicense holds the license data returned by adaptation module report.
**/
export class AppliedLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=osLicense" })
  osLicense?: string;

  @Metadata({ data: "json, name=type" })
  type?: AppliedLicenseTypeEnum;
}
