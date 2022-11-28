import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Widget } from "./googleappscardv1widget";



// GoogleAppsCardV1Section
/** 
 * A section contains a collection of widgets that are rendered vertically in the order that they are specified.
**/
export class GoogleAppsCardV1Section extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collapsible" })
  collapsible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: string;

  @SpeakeasyMetadata({ data: "json, name=uncollapsibleWidgetsCount" })
  uncollapsibleWidgetsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=widgets", elemType: GoogleAppsCardV1Widget })
  widgets?: GoogleAppsCardV1Widget[];
}
