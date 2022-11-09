import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=elementGroup" })
  elementGroup?: Group;

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=line" })
  line?: Line;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=shape" })
  shape?: Shape;

  @Metadata({ data: "json, name=sheetsChart" })
  sheetsChart?: SheetsChart;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=table" })
  table?: Table;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=transform" })
  transform?: AffineTransform;

  @Metadata({ data: "json, name=video" })
  video?: Video;

  @Metadata({ data: "json, name=wordArt" })
  wordArt?: WordArt;
}
