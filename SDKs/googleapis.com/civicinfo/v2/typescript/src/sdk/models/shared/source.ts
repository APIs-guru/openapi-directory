import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Source
/** 
 * Contains information about the data source for the element containing it.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=official" })
  official?: boolean;
}
