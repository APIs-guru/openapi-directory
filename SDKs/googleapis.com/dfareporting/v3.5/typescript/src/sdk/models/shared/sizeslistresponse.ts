import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Size } from "./size";


// SizesListResponse
/** 
 * Size List Response
**/
export class SizesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=sizes", elemType: shared.Size })
  sizes?: Size[];
}
