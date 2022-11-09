import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Brand } from "./brand";


// ListBrandsResponse
/** 
 * Response message for ListBrands.
**/
export class ListBrandsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=brands", elemType: shared.Brand })
  brands?: Brand[];
}
