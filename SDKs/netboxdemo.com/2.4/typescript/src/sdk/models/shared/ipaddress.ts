import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressInterface } from "./ipaddressinterface";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVrf } from "./nestedvrf";



export class IpAddressRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class IpAddressStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class IpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: IpAddressInterface;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=nat_inside" })
  natInside?: NestedIpAddress;

  @SpeakeasyMetadata({ data: "json, name=nat_outside" })
  natOutside?: NestedIpAddress;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: IpAddressRole;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: IpAddressStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
