import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageElementProperties } from "./pageelementproperties";


// CreateTableRequest
/** 
 * Creates a new table.
**/
export class CreateTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: number;

  @Metadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=rows" })
  rows?: number;
}
