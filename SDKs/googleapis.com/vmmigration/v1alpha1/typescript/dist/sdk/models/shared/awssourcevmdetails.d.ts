import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AwsSourceVmDetailsFirmwareEnum {
    FirmwareUnspecified = "FIRMWARE_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
/**
 * Represent the source AWS VM details.
**/
export declare class AwsSourceVmDetails extends SpeakeasyBase {
    committedStorageBytes?: string;
    firmware?: AwsSourceVmDetailsFirmwareEnum;
}
