import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Identity
/** 
 * The unique identifier of the update.
**/
export class Identity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=updateId" })
  updateId?: string;
}
