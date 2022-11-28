import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Widget } from "./googleappscardv1widget";
/**
 * A section contains a collection of widgets that are rendered vertically in the order that they are specified.
**/
export declare class GoogleAppsCardV1Section extends SpeakeasyBase {
    collapsible?: boolean;
    header?: string;
    uncollapsibleWidgetsCount?: number;
    widgets?: GoogleAppsCardV1Widget[];
}
