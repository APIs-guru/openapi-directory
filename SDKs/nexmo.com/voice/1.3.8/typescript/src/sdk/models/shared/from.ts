import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// From
/** 
 * The endpoint you called from. Possible values are the same as `to`.
**/
export class From extends SpeakeasyBase {
  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
