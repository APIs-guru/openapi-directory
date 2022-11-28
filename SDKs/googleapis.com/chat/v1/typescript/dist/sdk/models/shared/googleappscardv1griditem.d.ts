import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ImageComponent } from "./googleappscardv1imagecomponent";
export declare enum GoogleAppsCardV1GridItemLayoutEnum {
    GridItemLayoutUnspecified = "GRID_ITEM_LAYOUT_UNSPECIFIED",
    TextBelow = "TEXT_BELOW",
    TextAbove = "TEXT_ABOVE"
}
/**
 * Represents a single item in the grid layout.
**/
export declare class GoogleAppsCardV1GridItem extends SpeakeasyBase {
    id?: string;
    image?: GoogleAppsCardV1ImageComponent;
    layout?: GoogleAppsCardV1GridItemLayoutEnum;
    subtitle?: string;
    title?: string;
}
