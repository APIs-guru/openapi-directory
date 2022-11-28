import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Property } from "./property";



// PropertyList
/** 
 * A collection of properties, key-value pairs that are either public or private to an application.
**/
export class PropertyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Property })
  items?: Property[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
