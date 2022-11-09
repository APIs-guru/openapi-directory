import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Meta
/** 
 * Meta Data relevant to the payload
**/
export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstAvailableDateTime" })
  firstAvailableDateTime?: Date;

  @Metadata({ data: "json, name=LastAvailableDateTime" })
  lastAvailableDateTime?: Date;

  @Metadata({ data: "json, name=TotalPages" })
  totalPages?: number;
}
