import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RoutePoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=coordinates" })
  coordinates?: Map<string, any>[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
