import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionType } from "./connectiontype";


// ConnectionTypesListResponse
/** 
 * Connection Type List Response
**/
export class ConnectionTypesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionTypes", elemType: shared.ConnectionType })
  connectionTypes?: ConnectionType[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
