import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// To
/** 
 * The single or mixed collection of endpoint types you connected to
**/
export class To extends SpeakeasyBase {
  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
