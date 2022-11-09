import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuntimeEntitySchema } from "./runtimeentityschema";


// ListRuntimeEntitySchemasResponse
/** 
 * Response message for ConnectorsService.ListRuntimeEntitySchemas.
**/
export class ListRuntimeEntitySchemasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=runtimeEntitySchemas", elemType: shared.RuntimeEntitySchema })
  runtimeEntitySchemas?: RuntimeEntitySchema[];
}
