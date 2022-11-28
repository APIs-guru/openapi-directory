import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionType } from "./connectiontype";
/**
 * Connection Type List Response
**/
export declare class ConnectionTypesListResponse extends SpeakeasyBase {
    connectionTypes?: ConnectionType[];
    kind?: string;
}
