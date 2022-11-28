import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemProtocolEnum } from "./itemprotocolenum";
import { TechnologyEnum } from "./technologyenum";
import { ItemTypeEnum } from "./itemtypeenum";
import { GeoCoordsReadOnly } from "./geocoordsreadonly";



export class ItemInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code_hex" })
  codeHex?: string;

  @SpeakeasyMetadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=location_request" })
  locationRequest?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: ItemProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=technology" })
  technology?: TechnologyEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ItemTypeEnum;
}


export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code_hex" })
  codeHex?: string;

  @SpeakeasyMetadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=geo_coords" })
  geoCoords?: GeoCoordsReadOnly;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_present" })
  isPresent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=location_request" })
  locationRequest?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=move_count" })
  moveCount?: number;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: ItemProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=sets" })
  sets?: string[];

  @SpeakeasyMetadata({ data: "json, name=technology" })
  technology?: TechnologyEnum;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_last_present" })
  timeLastPresent?: string;

  @SpeakeasyMetadata({ data: "json, name=time_moved" })
  timeMoved?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
