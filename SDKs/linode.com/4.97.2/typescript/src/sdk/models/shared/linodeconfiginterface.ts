import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LinodeConfigInterfacePurposeEnum {
    Public = "public",
    Vlan = "vlan"
}


// LinodeConfigInterface
/** 
 * The Network Interface to apply to this Linode's configuration profile.
 * 
**/
export class LinodeConfigInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipam_address" })
  ipamAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: LinodeConfigInterfacePurposeEnum;
}
