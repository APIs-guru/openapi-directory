import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IpAddressTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6",
    Ipv6Pool = "ipv6/pool",
    Ipv6Range = "ipv6/range"
}


// IpAddress
/** 
 * An IP address that exists in Linode's system, either IPv4 or IPv6.
 * 
**/
export class IpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway?: string;

  @SpeakeasyMetadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: number;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rdns" })
  rdns?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=subnet_mask" })
  subnetMask?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: IpAddressTypeEnum;
}


// IpAddressInput
/** 
 * An IP address that exists in Linode's system, either IPv4 or IPv6.
 * 
**/
export class IpAddressInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rdns" })
  rdns?: string;
}
