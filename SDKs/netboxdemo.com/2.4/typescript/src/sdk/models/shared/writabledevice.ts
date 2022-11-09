import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: number;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=device_role" })
  deviceRole: number;

  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=face" })
  face?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_device" })
  parentDevice?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: number;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=primary_ip" })
  primaryIp?: string;

  @Metadata({ data: "json, name=primary_ip4" })
  primaryIp4?: number;

  @Metadata({ data: "json, name=primary_ip6" })
  primaryIp6?: number;

  @Metadata({ data: "json, name=rack" })
  rack?: number;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=site" })
  site: number;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=vc_position" })
  vcPosition?: number;

  @Metadata({ data: "json, name=vc_priority" })
  vcPriority?: number;

  @Metadata({ data: "json, name=virtual_chassis" })
  virtualChassis?: number;
}
