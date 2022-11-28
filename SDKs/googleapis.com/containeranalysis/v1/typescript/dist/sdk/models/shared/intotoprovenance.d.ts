import { SpeakeasyBase } from "../../../internal/utils";
import { BuilderConfig } from "./builderconfig";
import { Metadata } from "./metadata";
import { Recipe } from "./recipe";
export declare class InTotoProvenance extends SpeakeasyBase {
    builderConfig?: BuilderConfig;
    materials?: string[];
    metadata?: Metadata;
    recipe?: Recipe;
}
