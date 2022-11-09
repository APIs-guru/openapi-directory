import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RowQuestion
/** 
 * Configuration for a question that is part of a question group.
**/
export class RowQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title?: string;
}
