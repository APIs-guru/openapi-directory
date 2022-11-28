import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dimension
/** 
 * Represents a dimension.
**/
export class Dimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
