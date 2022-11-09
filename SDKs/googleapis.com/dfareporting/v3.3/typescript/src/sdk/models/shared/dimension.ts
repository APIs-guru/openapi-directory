import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimension
/** 
 * Represents a dimension.
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
