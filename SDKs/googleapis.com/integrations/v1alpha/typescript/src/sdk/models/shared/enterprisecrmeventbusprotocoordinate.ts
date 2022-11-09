import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoCoordinate
/** 
 * Represents two-dimensional positions.
**/
export class EnterpriseCrmEventbusProtoCoordinate extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}
