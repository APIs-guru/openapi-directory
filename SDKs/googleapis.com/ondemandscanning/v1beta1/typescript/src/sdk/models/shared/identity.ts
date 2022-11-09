import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Identity
/** 
 * The unique identifier of the update.
**/
export class Identity extends SpeakeasyBase {
  @Metadata({ data: "json, name=revision" })
  revision?: number;

  @Metadata({ data: "json, name=updateId" })
  updateId?: string;
}
