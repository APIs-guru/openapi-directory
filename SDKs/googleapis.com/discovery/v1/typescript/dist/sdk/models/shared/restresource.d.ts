import { SpeakeasyBase } from "../../../internal/utils";
import { RestMethod } from "./restmethod";
export declare class RestResource extends SpeakeasyBase {
    methods?: Map<string, RestMethod>;
    resources?: Map<string, RestResource>;
}
