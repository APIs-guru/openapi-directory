import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionType } from "./connectiontype";



// ConnectionTypesListResponse
/** 
 * Connection Type List Response
**/
export class ConnectionTypesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionTypes", elemType: ConnectionType })
  connectionTypes?: ConnectionType[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
