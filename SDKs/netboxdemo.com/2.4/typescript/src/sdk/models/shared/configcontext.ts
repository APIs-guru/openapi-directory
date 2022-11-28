import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedPlatform } from "./nestedplatform";
import { NestedRegion } from "./nestedregion";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenantGroup } from "./nestedtenantgroup";
import { NestedTenant } from "./nestedtenant";



export class ConfigContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: NestedPlatform })
  platforms?: NestedPlatform[];

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: NestedRegion })
  regions?: NestedRegion[];

  @SpeakeasyMetadata({ data: "json, name=roles", elemType: NestedDeviceRole })
  roles?: NestedDeviceRole[];

  @SpeakeasyMetadata({ data: "json, name=sites", elemType: NestedSite })
  sites?: NestedSite[];

  @SpeakeasyMetadata({ data: "json, name=tenant_groups", elemType: NestedTenantGroup })
  tenantGroups?: NestedTenantGroup[];

  @SpeakeasyMetadata({ data: "json, name=tenants", elemType: NestedTenant })
  tenants?: NestedTenant[];

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
