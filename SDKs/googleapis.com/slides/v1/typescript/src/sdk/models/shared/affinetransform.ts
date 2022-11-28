import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AffineTransformUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Emu = "EMU",
    Pt = "PT"
}


// AffineTransform
/** 
 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements.
**/
export class AffineTransform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scaleX" })
  scaleX?: number;

  @SpeakeasyMetadata({ data: "json, name=scaleY" })
  scaleY?: number;

  @SpeakeasyMetadata({ data: "json, name=shearX" })
  shearX?: number;

  @SpeakeasyMetadata({ data: "json, name=shearY" })
  shearY?: number;

  @SpeakeasyMetadata({ data: "json, name=translateX" })
  translateX?: number;

  @SpeakeasyMetadata({ data: "json, name=translateY" })
  translateY?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: AffineTransformUnitEnum;
}
