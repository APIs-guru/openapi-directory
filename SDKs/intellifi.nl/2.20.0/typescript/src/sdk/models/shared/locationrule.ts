import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";
import { Location } from "./location";
import { LocationRuleTypeEnum } from "./locationruletypeenum";


export class LocationRuleConditions11 extends SpeakeasyBase {
  @Metadata({ data: "json, name=from_location" })
  fromLocation?: Location;
}


export class LocationRuleConditions12 extends SpeakeasyBase {
  @Metadata({ data: "json, name=from_location_id" })
  fromLocationId?: string;
}


export class LocationRuleConditions13 extends SpeakeasyBase {
  @Metadata({ data: "json, name=from_location_url" })
  fromLocationUrl?: string;
}


export class LocationRuleConditions21 extends SpeakeasyBase {
  @Metadata({ data: "json, name=to_location" })
  toLocation?: Location;
}


export class LocationRuleConditions22 extends SpeakeasyBase {
  @Metadata({ data: "json, name=to_location_id" })
  toLocationId?: string;
}


export class LocationRuleConditions23 extends SpeakeasyBase {
  @Metadata({ data: "json, name=to_location_url" })
  toLocationUrl?: string;
}


export class LocationRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions" })
  conditions?: any;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=type" })
  type?: LocationRuleTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
