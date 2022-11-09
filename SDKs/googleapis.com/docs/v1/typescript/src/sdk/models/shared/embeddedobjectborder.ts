import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";

export enum EmbeddedObjectBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED"
,    Solid = "SOLID"
,    Dot = "DOT"
,    Dash = "DASH"
}

export enum EmbeddedObjectBorderPropertyStateEnum {
    Rendered = "RENDERED"
,    NotRendered = "NOT_RENDERED"
}


// EmbeddedObjectBorder
/** 
 * A border around an EmbeddedObject.
**/
export class EmbeddedObjectBorder extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: OptionalColor;

  @Metadata({ data: "json, name=dashStyle" })
  dashStyle?: EmbeddedObjectBorderDashStyleEnum;

  @Metadata({ data: "json, name=propertyState" })
  propertyState?: EmbeddedObjectBorderPropertyStateEnum;

  @Metadata({ data: "json, name=width" })
  width?: Dimension;
}
