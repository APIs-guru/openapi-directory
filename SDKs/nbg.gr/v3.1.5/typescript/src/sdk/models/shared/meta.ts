import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Meta
/** 
 * Meta Data relevant to the payload
**/
export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstAvailableDateTime" })
  firstAvailableDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=LastAvailableDateTime" })
  lastAvailableDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=TotalPages" })
  totalPages?: number;
}
