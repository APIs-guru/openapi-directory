import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Color } from "./color";


export class Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=colors", elemType: shared.Color })
  colors?: Color[];

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=number_of_pixel_in_image" })
  numberOfPixelInImage?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
