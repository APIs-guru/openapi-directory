import { SpeakeasyBase } from "../../../internal/utils";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";
/**
 * The categories in a Lighthouse run.
**/
export declare class Categories extends SpeakeasyBase {
    accessibility?: LighthouseCategoryV5;
    bestPractices?: LighthouseCategoryV5;
    performance?: LighthouseCategoryV5;
    pwa?: LighthouseCategoryV5;
    seo?: LighthouseCategoryV5;
}
