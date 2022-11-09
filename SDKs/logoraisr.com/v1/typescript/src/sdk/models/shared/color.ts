import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Color extends SpeakeasyBase {
  @Metadata({ data: "json, name=blue" })
  blue?: number;

  @Metadata({ data: "json, name=green" })
  green?: number;

  @Metadata({ data: "json, name=hex" })
  hex?: string;

  @Metadata({ data: "json, name=number_of_pixel" })
  numberOfPixel?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: string;

  @Metadata({ data: "json, name=red" })
  red?: number;
}
