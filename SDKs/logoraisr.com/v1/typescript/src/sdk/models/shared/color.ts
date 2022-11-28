import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Color extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blue" })
  blue?: number;

  @SpeakeasyMetadata({ data: "json, name=green" })
  green?: number;

  @SpeakeasyMetadata({ data: "json, name=hex" })
  hex?: string;

  @SpeakeasyMetadata({ data: "json, name=number_of_pixel" })
  numberOfPixel?: number;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: string;

  @SpeakeasyMetadata({ data: "json, name=red" })
  red?: number;
}
