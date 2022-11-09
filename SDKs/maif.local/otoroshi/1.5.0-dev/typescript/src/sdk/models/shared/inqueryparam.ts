import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InQueryParam
/** 
 * JWT location in a query param
**/
export class InQueryParam extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
