import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Source
/** 
 * Contains information about the data source for the element containing it.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=official" })
  official?: boolean;
}
