import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuntimeActionSchema } from "./runtimeactionschema";


// ListRuntimeActionSchemasResponse
/** 
 * Response message for ConnectorsService.ListRuntimeActionSchemas.
**/
export class ListRuntimeActionSchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=runtimeActionSchemas", elemType: shared.RuntimeActionSchema })
  runtimeActionSchemas?: RuntimeActionSchema[];
}
