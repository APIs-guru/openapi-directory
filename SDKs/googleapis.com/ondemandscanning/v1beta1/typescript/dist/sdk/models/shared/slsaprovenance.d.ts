import { SpeakeasyBase } from "../../../internal/utils";
import { SlsaBuilder } from "./slsabuilder";
import { Material } from "./material";
import { SlsaMetadata } from "./slsametadata";
import { SlsaRecipe } from "./slsarecipe";
export declare class SlsaProvenance extends SpeakeasyBase {
    builder?: SlsaBuilder;
    materials?: Material[];
    metadata?: SlsaMetadata;
    recipe?: SlsaRecipe;
}
