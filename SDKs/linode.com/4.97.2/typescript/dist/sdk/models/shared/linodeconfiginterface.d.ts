import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LinodeConfigInterfacePurposeEnum {
    Public = "public",
    Vlan = "vlan"
}
/**
 * The Network Interface to apply to this Linode's configuration profile.
 *
**/
export declare class LinodeConfigInterface extends SpeakeasyBase {
    ipamAddress?: string;
    label?: string;
    purpose?: LinodeConfigInterfacePurposeEnum;
}
