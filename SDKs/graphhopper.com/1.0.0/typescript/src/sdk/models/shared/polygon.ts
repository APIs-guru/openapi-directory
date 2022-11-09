import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Polygon extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinates" })
  coordinates?: number[][][];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
