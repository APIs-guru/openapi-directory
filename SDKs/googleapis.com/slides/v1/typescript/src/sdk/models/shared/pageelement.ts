import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// PageElement
/** 
 * A visual element rendered on a page.
**/
export class PageElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=elementGroup" })
  elementGroup?: Group;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: Line;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=shape" })
  shape?: Shape;

  @SpeakeasyMetadata({ data: "json, name=sheetsChart" })
  sheetsChart?: SheetsChart;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: Table;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=transform" })
  transform?: AffineTransform;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: Video;

  @SpeakeasyMetadata({ data: "json, name=wordArt" })
  wordArt?: WordArt;
}
