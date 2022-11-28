import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { ImageProperties } from "./imageproperties";
import { LinkedContentReference } from "./linkedcontentreference";
import { Dimension } from "./dimension";
import { Size } from "./size";



// EmbeddedObject
/** 
 * An embedded object in the document.
**/
export class EmbeddedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=embeddedDrawingProperties" })
  embeddedDrawingProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=embeddedObjectBorder" })
  embeddedObjectBorder?: EmbeddedObjectBorder;

  @SpeakeasyMetadata({ data: "json, name=imageProperties" })
  imageProperties?: ImageProperties;

  @SpeakeasyMetadata({ data: "json, name=linkedContentReference" })
  linkedContentReference?: LinkedContentReference;

  @SpeakeasyMetadata({ data: "json, name=marginBottom" })
  marginBottom?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginLeft" })
  marginLeft?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginRight" })
  marginRight?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=marginTop" })
  marginTop?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
