import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Brand } from "./brand";



// ListBrandsResponse
/** 
 * Response message for ListBrands.
**/
export class ListBrandsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brands", elemType: Brand })
  brands?: Brand[];
}
