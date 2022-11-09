import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseInfo } from "./responseinfo";
import { RouteResponsePath } from "./routeresponsepath";


export class RouteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: ResponseInfo;

  @Metadata({ data: "json, name=paths", elemType: shared.RouteResponsePath })
  paths?: RouteResponsePath[];
}
