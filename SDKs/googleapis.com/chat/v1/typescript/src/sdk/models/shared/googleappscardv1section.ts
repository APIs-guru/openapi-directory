import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCardV1Widget } from "./googleappscardv1widget";


// GoogleAppsCardV1Section
/** 
 * A section contains a collection of widgets that are rendered vertically in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties, for example, float.
**/
export class GoogleAppsCardV1Section extends SpeakeasyBase {
  @Metadata({ data: "json, name=collapsible" })
  collapsible?: boolean;

  @Metadata({ data: "json, name=header" })
  header?: string;

  @Metadata({ data: "json, name=uncollapsibleWidgetsCount" })
  uncollapsibleWidgetsCount?: number;

  @Metadata({ data: "json, name=widgets", elemType: shared.GoogleAppsCardV1Widget })
  widgets?: GoogleAppsCardV1Widget[];
}
