import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";



// SizesListResponse
/** 
 * Size List Response
**/
export class SizesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=sizes", elemType: Size })
  sizes?: Size[];
}
