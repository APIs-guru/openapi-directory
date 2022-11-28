import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConnectionType
/** 
 * Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.
**/
export class ConnectionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
