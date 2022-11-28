import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableDeviceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=device_role" })
  deviceRole: number;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: number;

  @SpeakeasyMetadata({ data: "json, name=face" })
  face?: number;

  @SpeakeasyMetadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_ip4" })
  primaryIp4?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_ip6" })
  primaryIp6?: number;

  @SpeakeasyMetadata({ data: "json, name=rack" })
  rack?: number;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=vc_position" })
  vcPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=vc_priority" })
  vcPriority?: number;

  @SpeakeasyMetadata({ data: "json, name=virtual_chassis" })
  virtualChassis?: number;
}
