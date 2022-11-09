import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeoCoordsReadOnly } from "./geocoordsreadonly";
import { ItemProtocolEnum } from "./itemprotocolenum";
import { TechnologyEnum } from "./technologyenum";
import { ItemTypeEnum } from "./itemtypeenum";


export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=code_hex" })
  codeHex?: string;

  @Metadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=geo_coords" })
  geoCoords?: GeoCoordsReadOnly;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_present" })
  isPresent?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=location_request" })
  locationRequest?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=move_count" })
  moveCount?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: ItemProtocolEnum;

  @Metadata({ data: "json, name=sets" })
  sets?: string[];

  @Metadata({ data: "json, name=technology" })
  technology?: TechnologyEnum;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_last_present" })
  timeLastPresent?: string;

  @Metadata({ data: "json, name=time_moved" })
  timeMoved?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=type" })
  type?: ItemTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
