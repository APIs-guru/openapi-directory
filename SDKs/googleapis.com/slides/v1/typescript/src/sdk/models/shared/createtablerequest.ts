import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";



// CreateTableRequest
/** 
 * Creates a new table.
**/
export class CreateTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: number;

  @SpeakeasyMetadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;
}
