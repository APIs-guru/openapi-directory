import { SpeakeasyBase } from "../../../internal/utils";
import { Presentation } from "./presentation";
import { SearchEngineOptimization } from "./searchengineoptimization";
import { Shipping } from "./shipping";
export declare enum OnlinePropertiesStatusEnum {
    Active = "ACTIVE",
    Hidden = "HIDDEN"
}
export declare class OnlineProperties extends SpeakeasyBase {
    description?: string;
    presentation?: Presentation;
    seo?: SearchEngineOptimization;
    shipping?: Shipping;
    status: OnlinePropertiesStatusEnum;
    title?: string;
}
