import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoCoordinate
/** 
 * Represents two-dimensional positions.
**/
export class EnterpriseCrmEventbusProtoCoordinate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}
