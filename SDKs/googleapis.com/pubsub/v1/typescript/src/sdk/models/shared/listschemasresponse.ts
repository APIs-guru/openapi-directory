import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Schema } from "./schema";


// ListSchemasResponse
/** 
 * Response for the `ListSchemas` method.
**/
export class ListSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=schemas", elemType: shared.Schema })
  schemas?: Schema[];
}
