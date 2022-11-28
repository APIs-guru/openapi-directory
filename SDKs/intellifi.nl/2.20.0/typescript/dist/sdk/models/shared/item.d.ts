import { SpeakeasyBase } from "../../../internal/utils";
import { ItemProtocolEnum } from "./itemprotocolenum";
import { TechnologyEnum } from "./technologyenum";
import { ItemTypeEnum } from "./itemtypeenum";
import { GeoCoordsReadOnly } from "./geocoordsreadonly";
export declare class ItemInput extends SpeakeasyBase {
    codeHex?: string;
    configRequest?: Map<string, any>;
    custom?: any;
    label?: string;
    locationRequest?: string;
    metadata?: Map<string, any>;
    protocol?: ItemProtocolEnum;
    technology?: TechnologyEnum;
    type?: ItemTypeEnum;
}
export declare class Item extends SpeakeasyBase {
    codeHex?: string;
    configRequest?: Map<string, any>;
    custom?: any;
    geoCoords?: GeoCoordsReadOnly;
    id?: string;
    isPresent?: boolean;
    label?: string;
    locationRequest?: string;
    metadata?: Map<string, any>;
    moveCount?: number;
    protocol?: ItemProtocolEnum;
    sets?: string[];
    technology?: TechnologyEnum;
    timeCreated?: string;
    timeLastPresent?: string;
    timeMoved?: string;
    timeUpdated?: string;
    type?: ItemTypeEnum;
    url?: string;
}
