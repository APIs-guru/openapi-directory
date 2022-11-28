import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// From
/** 
 * The endpoint you called from. Possible values are the same as `to`.
**/
export class From extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
