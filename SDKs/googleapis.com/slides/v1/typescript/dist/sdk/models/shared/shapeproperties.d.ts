import { SpeakeasyBase } from "../../../internal/utils";
import { Autofit } from "./autofit";
import { Link } from "./link";
import { Outline } from "./outline";
import { Shadow } from "./shadow";
import { ShapeBackgroundFill } from "./shapebackgroundfill";
export declare enum ShapePropertiesContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}
/**
 * The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
**/
export declare class ShapeProperties extends SpeakeasyBase {
    autofit?: Autofit;
    contentAlignment?: ShapePropertiesContentAlignmentEnum;
    link?: Link;
    outline?: Outline;
    shadow?: Shadow;
    shapeBackgroundFill?: ShapeBackgroundFill;
}
