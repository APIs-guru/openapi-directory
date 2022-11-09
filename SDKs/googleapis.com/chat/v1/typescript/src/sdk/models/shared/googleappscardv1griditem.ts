import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1ImageComponent } from "./googleappscardv1imagecomponent";

export enum GoogleAppsCardV1GridItemLayoutEnum {
    GridItemLayoutUnspecified = "GRID_ITEM_LAYOUT_UNSPECIFIED"
,    TextBelow = "TEXT_BELOW"
,    TextAbove = "TEXT_ABOVE"
}

export enum GoogleAppsCardV1GridItemTextAlignmentEnum {
    HorizontalAlignmentUnspecified = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
,    Start = "START"
,    Center = "CENTER"
,    End = "END"
}


// GoogleAppsCardV1GridItem
/** 
 * Represents a single item in the grid layout.
**/
export class GoogleAppsCardV1GridItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: GoogleAppsCardV1ImageComponent;

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleAppsCardV1GridItemLayoutEnum;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=textAlignment" })
  textAlignment?: GoogleAppsCardV1GridItemTextAlignmentEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
