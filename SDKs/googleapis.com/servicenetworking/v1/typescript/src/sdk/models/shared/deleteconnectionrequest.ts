import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteConnectionRequest
/** 
 * Request to delete a private service access connection. The call will fail if there are any managed service instances using this connection.
**/
export class DeleteConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;
}
