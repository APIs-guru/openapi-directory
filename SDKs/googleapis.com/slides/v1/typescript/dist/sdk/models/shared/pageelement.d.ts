import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { Image } from "./image";
import { Line } from "./line";
import { Shape } from "./shape";
import { SheetsChart } from "./sheetschart";
import { Size } from "./size";
import { Table } from "./table";
import { AffineTransform } from "./affinetransform";
import { Video } from "./video";
import { WordArt } from "./wordart";
/**
 * A visual element rendered on a page.
**/
export declare class PageElement extends SpeakeasyBase {
    description?: string;
    elementGroup?: Group;
    image?: Image;
    line?: Line;
    objectId?: string;
    shape?: Shape;
    sheetsChart?: SheetsChart;
    size?: Size;
    table?: Table;
    title?: string;
    transform?: AffineTransform;
    video?: Video;
    wordArt?: WordArt;
}
