import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DsRecord } from "./dsrecord";



// CustomDns
/** 
 * Configuration for an arbitrary DNS provider.
**/
export class CustomDns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dsRecords", elemType: DsRecord })
  dsRecords?: DsRecord[];

  @SpeakeasyMetadata({ data: "json, name=nameServers" })
  nameServers?: string[];
}
