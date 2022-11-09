import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { ImageProperties } from "./imageproperties";
import { LinkedContentReference } from "./linkedcontentreference";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Size } from "./size";


// EmbeddedObject
/** 
 * An embedded object in the document.
**/
export class EmbeddedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=embeddedDrawingProperties" })
  embeddedDrawingProperties?: Map<string, any>;

  @Metadata({ data: "json, name=embeddedObjectBorder" })
  embeddedObjectBorder?: EmbeddedObjectBorder;

  @Metadata({ data: "json, name=imageProperties" })
  imageProperties?: ImageProperties;

  @Metadata({ data: "json, name=linkedContentReference" })
  linkedContentReference?: LinkedContentReference;

  @Metadata({ data: "json, name=marginBottom" })
  marginBottom?: Dimension;

  @Metadata({ data: "json, name=marginLeft" })
  marginLeft?: Dimension;

  @Metadata({ data: "json, name=marginRight" })
  marginRight?: Dimension;

  @Metadata({ data: "json, name=marginTop" })
  marginTop?: Dimension;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
