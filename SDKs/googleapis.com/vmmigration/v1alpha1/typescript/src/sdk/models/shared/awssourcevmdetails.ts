import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AwsSourceVmDetailsFirmwareEnum {
    FirmwareUnspecified = "FIRMWARE_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}


// AwsSourceVmDetails
/** 
 * Represent the source AWS VM details.
**/
export class AwsSourceVmDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=committedStorageBytes" })
  committedStorageBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=firmware" })
  firmware?: AwsSourceVmDetailsFirmwareEnum;
}
