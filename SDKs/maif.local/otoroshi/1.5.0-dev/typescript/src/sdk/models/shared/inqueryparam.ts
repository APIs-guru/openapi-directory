import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InQueryParam
/** 
 * JWT location in a query param
**/
export class InQueryParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
