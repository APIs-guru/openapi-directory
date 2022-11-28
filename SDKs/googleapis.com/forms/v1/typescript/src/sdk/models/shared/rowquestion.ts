import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RowQuestion
/** 
 * Configuration for a question that is part of a question group.
**/
export class RowQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
