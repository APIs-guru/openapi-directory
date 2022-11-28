import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseInfo } from "./responseinfo";
import { RouteResponsePath } from "./routeresponsepath";
export declare class RouteResponse extends SpeakeasyBase {
    info?: ResponseInfo;
    paths?: RouteResponsePath[];
}
