import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Polygon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: number[][][];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
