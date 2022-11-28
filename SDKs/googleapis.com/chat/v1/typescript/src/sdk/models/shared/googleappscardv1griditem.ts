import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ImageComponent } from "./googleappscardv1imagecomponent";


export enum GoogleAppsCardV1GridItemLayoutEnum {
    GridItemLayoutUnspecified = "GRID_ITEM_LAYOUT_UNSPECIFIED",
    TextBelow = "TEXT_BELOW",
    TextAbove = "TEXT_ABOVE"
}


// GoogleAppsCardV1GridItem
/** 
 * Represents a single item in the grid layout.
**/
export class GoogleAppsCardV1GridItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleAppsCardV1ImageComponent;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleAppsCardV1GridItemLayoutEnum;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
