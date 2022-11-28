import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { LocationRuleTypeEnum } from "./locationruletypeenum";



export class LocationRuleConditions11 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from_location" })
  fromLocation?: Location;
}


export class LocationRuleConditions12 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from_location_id" })
  fromLocationId?: string;
}


export class LocationRuleConditions13 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from_location_url" })
  fromLocationUrl?: string;
}


export class LocationRuleConditions21 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=to_location" })
  toLocation?: Location;
}


export class LocationRuleConditions22 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=to_location_id" })
  toLocationId?: string;
}


export class LocationRuleConditions23 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=to_location_url" })
  toLocationUrl?: string;
}


export class LocationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: any;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LocationRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
