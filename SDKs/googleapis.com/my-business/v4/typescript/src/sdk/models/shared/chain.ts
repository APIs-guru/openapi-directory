import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChainName } from "./chainname";
import { ChainUrl } from "./chainurl";



// Chain
/** 
 * A chain is a brand that your business's locations can be affiliated with.
**/
export class Chain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chainNames", elemType: ChainName })
  chainNames?: ChainName[];

  @SpeakeasyMetadata({ data: "json, name=locationCount" })
  locationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: ChainUrl })
  websites?: ChainUrl[];
}
