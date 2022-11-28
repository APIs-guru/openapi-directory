import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { ImageProperties } from "./imageproperties";
import { LinkedContentReference } from "./linkedcontentreference";
import { Dimension } from "./dimension";
import { Size } from "./size";
/**
 * An embedded object in the document.
**/
export declare class EmbeddedObject extends SpeakeasyBase {
    description?: string;
    embeddedDrawingProperties?: Map<string, any>;
    embeddedObjectBorder?: EmbeddedObjectBorder;
    imageProperties?: ImageProperties;
    linkedContentReference?: LinkedContentReference;
    marginBottom?: Dimension;
    marginLeft?: Dimension;
    marginRight?: Dimension;
    marginTop?: Dimension;
    size?: Size;
    title?: string;
}
