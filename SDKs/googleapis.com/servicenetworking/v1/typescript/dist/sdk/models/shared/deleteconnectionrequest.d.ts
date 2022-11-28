import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete a private service access connection. The call will fail if there are any managed service instances using this connection.
**/
export declare class DeleteConnectionRequest extends SpeakeasyBase {
    consumerNetwork?: string;
}
