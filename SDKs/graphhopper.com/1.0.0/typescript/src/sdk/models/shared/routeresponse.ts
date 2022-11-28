import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseInfo } from "./responseinfo";
import { RouteResponsePath } from "./routeresponsepath";



export class RouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: ResponseInfo;

  @SpeakeasyMetadata({ data: "json, name=paths", elemType: RouteResponsePath })
  paths?: RouteResponsePath[];
}
