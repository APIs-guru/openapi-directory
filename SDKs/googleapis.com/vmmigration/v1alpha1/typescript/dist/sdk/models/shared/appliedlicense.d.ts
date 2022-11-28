import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppliedLicenseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    None = "NONE",
    Payg = "PAYG",
    Byol = "BYOL"
}
/**
 * AppliedLicense holds the license data returned by adaptation module report.
**/
export declare class AppliedLicense extends SpeakeasyBase {
    osLicense?: string;
    type?: AppliedLicenseTypeEnum;
}
