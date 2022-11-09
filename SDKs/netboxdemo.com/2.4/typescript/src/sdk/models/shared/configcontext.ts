import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NestedPlatform } from "./nestedplatform";
import { NestedRegion } from "./nestedregion";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenantGroup } from "./nestedtenantgroup";
import { NestedTenant } from "./nestedtenant";


export class ConfigContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platforms", elemType: shared.NestedPlatform })
  platforms?: NestedPlatform[];

  @Metadata({ data: "json, name=regions", elemType: shared.NestedRegion })
  regions?: NestedRegion[];

  @Metadata({ data: "json, name=roles", elemType: shared.NestedDeviceRole })
  roles?: NestedDeviceRole[];

  @Metadata({ data: "json, name=sites", elemType: shared.NestedSite })
  sites?: NestedSite[];

  @Metadata({ data: "json, name=tenant_groups", elemType: shared.NestedTenantGroup })
  tenantGroups?: NestedTenantGroup[];

  @Metadata({ data: "json, name=tenants", elemType: shared.NestedTenant })
  tenants?: NestedTenant[];

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
