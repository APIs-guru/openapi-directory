import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeActionSchema } from "./runtimeactionschema";



// ListRuntimeActionSchemasResponse
/** 
 * Response message for ConnectorsService.ListRuntimeActionSchemas.
**/
export class ListRuntimeActionSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeActionSchemas", elemType: RuntimeActionSchema })
  runtimeActionSchemas?: RuntimeActionSchema[];
}
