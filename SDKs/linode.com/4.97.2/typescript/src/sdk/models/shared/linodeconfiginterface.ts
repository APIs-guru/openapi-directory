import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LinodeConfigInterfacePurposeEnum {
    Public = "public"
,    Vlan = "vlan"
}


// LinodeConfigInterface
/** 
 * The Network Interface to apply to this Linode's configuration profile.
 * 
**/
export class LinodeConfigInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipam_address" })
  ipamAddress?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: LinodeConfigInterfacePurposeEnum;
}
