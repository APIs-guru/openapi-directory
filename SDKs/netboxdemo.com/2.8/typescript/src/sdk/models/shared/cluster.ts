import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedClusterGroup } from "./nestedclustergroup";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedClusterType } from "./nestedclustertype";



export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: NestedClusterGroup;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: NestedClusterType;

  @SpeakeasyMetadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;
}
