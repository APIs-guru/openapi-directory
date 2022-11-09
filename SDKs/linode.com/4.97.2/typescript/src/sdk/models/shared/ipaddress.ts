import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IpAddressTypeEnum {
    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
,    Ipv6Pool = "ipv6/pool"
,    Ipv6Range = "ipv6/range"
}


// IpAddress
/** 
 * An IP address that exists in Linode's system, either IPv4 or IPv6.
 * 
**/
export class IpAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=gateway" })
  gateway?: string;

  @Metadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @Metadata({ data: "json, name=prefix" })
  prefix?: number;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=rdns" })
  rdns?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=subnet_mask" })
  subnetMask?: string;

  @Metadata({ data: "json, name=type" })
  type?: IpAddressTypeEnum;
}
