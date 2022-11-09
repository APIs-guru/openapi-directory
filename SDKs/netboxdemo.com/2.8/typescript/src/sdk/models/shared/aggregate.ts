import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRir } from "./nestedrir";

export enum AggregateFamilyLabelEnum {
    IPv4 = "IPv4"
,    IPv6 = "IPv6"
}


export class AggregateFamily extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: AggregateFamilyLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class Aggregate extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=date_added" })
  dateAdded?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=family" })
  family?: AggregateFamily;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=prefix" })
  prefix: string;

  @Metadata({ data: "json, name=rir" })
  rir: NestedRir;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
