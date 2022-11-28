import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1GridItem } from "./googleappscardv1griditem";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
/**
 * Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon. For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "numColumns": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4.0 }, "items": [ "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" ], "onClick": { "openLink": { "url":"https://www.example.com" } } } ```
**/
export declare class GoogleAppsCardV1Grid extends SpeakeasyBase {
    borderStyle?: GoogleAppsCardV1BorderStyle;
    columnCount?: number;
    items?: GoogleAppsCardV1GridItem[];
    onClick?: GoogleAppsCardV1OnClick;
    title?: string;
}
