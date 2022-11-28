import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";


export enum EmbeddedObjectBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}

export enum EmbeddedObjectBorderPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED"
}


// EmbeddedObjectBorder
/** 
 * A border around an EmbeddedObject.
**/
export class EmbeddedObjectBorder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: OptionalColor;

  @SpeakeasyMetadata({ data: "json, name=dashStyle" })
  dashStyle?: EmbeddedObjectBorderDashStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=propertyState" })
  propertyState?: EmbeddedObjectBorderPropertyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: Dimension;
}
