import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";
import { Asset } from "./asset";


// Statement
/** 
 * Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).
**/
export class Statement extends SpeakeasyBase {
  @Metadata({ data: "json, name=relation" })
  relation?: string;

  @Metadata({ data: "json, name=source" })
  source?: Asset;

  @Metadata({ data: "json, name=target" })
  target?: Asset;
}
