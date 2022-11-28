import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Schema } from "./schema";



// ListSchemasResponse
/** 
 * Response for the `ListSchemas` method.
**/
export class ListSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=schemas", elemType: Schema })
  schemas?: Schema[];
}
