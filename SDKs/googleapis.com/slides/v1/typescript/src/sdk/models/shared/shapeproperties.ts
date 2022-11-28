import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Autofit } from "./autofit";
import { Link } from "./link";
import { Outline } from "./outline";
import { Shadow } from "./shadow";
import { ShapeBackgroundFill } from "./shapebackgroundfill";


export enum ShapePropertiesContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}


// ShapeProperties
/** 
 * The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
**/
export class ShapeProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autofit" })
  autofit?: Autofit;

  @SpeakeasyMetadata({ data: "json, name=contentAlignment" })
  contentAlignment?: ShapePropertiesContentAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=outline" })
  outline?: Outline;

  @SpeakeasyMetadata({ data: "json, name=shadow" })
  shadow?: Shadow;

  @SpeakeasyMetadata({ data: "json, name=shapeBackgroundFill" })
  shapeBackgroundFill?: ShapeBackgroundFill;
}
