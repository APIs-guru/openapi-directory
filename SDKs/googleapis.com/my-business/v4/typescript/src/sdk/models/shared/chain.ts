import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChainName } from "./chainname";
import { ChainUrl } from "./chainurl";


// Chain
/** 
 * A chain is a brand that your business's locations can be affiliated with.
**/
export class Chain extends SpeakeasyBase {
  @Metadata({ data: "json, name=chainNames", elemType: shared.ChainName })
  chainNames?: ChainName[];

  @Metadata({ data: "json, name=locationCount" })
  locationCount?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=websites", elemType: shared.ChainUrl })
  websites?: ChainUrl[];
}
