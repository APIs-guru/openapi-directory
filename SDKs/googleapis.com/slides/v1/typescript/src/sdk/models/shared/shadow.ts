import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";
import { OpaqueColor } from "./opaquecolor";
import { AffineTransform } from "./affinetransform";

export enum ShadowAlignmentEnum {
    RectanglePositionUnspecified = "RECTANGLE_POSITION_UNSPECIFIED"
,    TopLeft = "TOP_LEFT"
,    TopCenter = "TOP_CENTER"
,    TopRight = "TOP_RIGHT"
,    LeftCenter = "LEFT_CENTER"
,    Center = "CENTER"
,    RightCenter = "RIGHT_CENTER"
,    BottomLeft = "BOTTOM_LEFT"
,    BottomCenter = "BOTTOM_CENTER"
,    BottomRight = "BOTTOM_RIGHT"
}

export enum ShadowPropertyStateEnum {
    Rendered = "RENDERED"
,    NotRendered = "NOT_RENDERED"
,    Inherit = "INHERIT"
}

export enum ShadowTypeEnum {
    ShadowTypeUnspecified = "SHADOW_TYPE_UNSPECIFIED"
,    Outer = "OUTER"
}


// Shadow
/** 
 * The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
**/
export class Shadow extends SpeakeasyBase {
  @Metadata({ data: "json, name=alignment" })
  alignment?: ShadowAlignmentEnum;

  @Metadata({ data: "json, name=alpha" })
  alpha?: number;

  @Metadata({ data: "json, name=blurRadius" })
  blurRadius?: Dimension;

  @Metadata({ data: "json, name=color" })
  color?: OpaqueColor;

  @Metadata({ data: "json, name=propertyState" })
  propertyState?: ShadowPropertyStateEnum;

  @Metadata({ data: "json, name=rotateWithShape" })
  rotateWithShape?: boolean;

  @Metadata({ data: "json, name=transform" })
  transform?: AffineTransform;

  @Metadata({ data: "json, name=type" })
  type?: ShadowTypeEnum;
}
