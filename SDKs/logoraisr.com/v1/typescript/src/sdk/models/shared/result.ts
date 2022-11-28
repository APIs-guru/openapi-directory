import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";



export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colors", elemType: Color })
  colors?: Color[];

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=number_of_pixel_in_image" })
  numberOfPixelInImage?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
