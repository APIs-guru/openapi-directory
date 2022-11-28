import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// To
/** 
 * The single or mixed collection of endpoint types you connected to
**/
export class To extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
