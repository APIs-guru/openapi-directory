import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEntitySchema } from "./runtimeentityschema";



// ListRuntimeEntitySchemasResponse
/** 
 * Response message for ConnectorsService.ListRuntimeEntitySchemas.
**/
export class ListRuntimeEntitySchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeEntitySchemas", elemType: RuntimeEntitySchema })
  runtimeEntitySchemas?: RuntimeEntitySchema[];
}
