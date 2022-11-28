import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RoutePoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
