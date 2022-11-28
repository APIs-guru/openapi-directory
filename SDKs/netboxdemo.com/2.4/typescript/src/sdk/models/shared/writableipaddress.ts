import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableIpAddressInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: number;

  @SpeakeasyMetadata({ data: "json, name=nat_inside" })
  natInside?: number;

  @SpeakeasyMetadata({ data: "json, name=nat_outside" })
  natOutside: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: number;
}
