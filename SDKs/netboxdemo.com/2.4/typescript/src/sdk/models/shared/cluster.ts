import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedClusterGroup } from "./nestedclustergroup";
import { NestedSite } from "./nestedsite";
import { NestedClusterType } from "./nestedclustertype";


export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=group" })
  group?: NestedClusterGroup;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=site" })
  site?: NestedSite;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type: NestedClusterType;
}
