import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";
import { LighthouseCategoryV5 } from "./lighthousecategoryv5";


// Categories
/** 
 * The categories in a Lighthouse run.
**/
export class Categories extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibility" })
  accessibility?: LighthouseCategoryV5;

  @Metadata({ data: "json, name=best-practices" })
  bestPractices?: LighthouseCategoryV5;

  @Metadata({ data: "json, name=performance" })
  performance?: LighthouseCategoryV5;

  @Metadata({ data: "json, name=pwa" })
  pwa?: LighthouseCategoryV5;

  @Metadata({ data: "json, name=seo" })
  seo?: LighthouseCategoryV5;
}
