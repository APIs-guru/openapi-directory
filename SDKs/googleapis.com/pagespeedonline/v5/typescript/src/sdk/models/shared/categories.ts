import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";



// Categories
/** 
 * The categories in a Lighthouse run.
**/
export class Categories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibility" })
  accessibility?: LighthouseCategoryV5;

  @SpeakeasyMetadata({ data: "json, name=best-practices" })
  bestPractices?: LighthouseCategoryV5;

  @SpeakeasyMetadata({ data: "json, name=performance" })
  performance?: LighthouseCategoryV5;

  @SpeakeasyMetadata({ data: "json, name=pwa" })
  pwa?: LighthouseCategoryV5;

  @SpeakeasyMetadata({ data: "json, name=seo" })
  seo?: LighthouseCategoryV5;
}
