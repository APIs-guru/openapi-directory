import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRir } from "./nestedrir";


export enum AggregateFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}


export class AggregateFamily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: AggregateFamilyLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Aggregate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=date_added" })
  dateAdded?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: AggregateFamily;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;

  @SpeakeasyMetadata({ data: "json, name=rir" })
  rir: NestedRir;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
