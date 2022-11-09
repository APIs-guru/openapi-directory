import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConnectionType
/** 
 * Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.
**/
export class ConnectionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
