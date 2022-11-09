import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DsRecord } from "./dsrecord";


// CustomDns
/** 
 * Configuration for an arbitrary DNS provider.
**/
export class CustomDns extends SpeakeasyBase {
  @Metadata({ data: "json, name=dsRecords", elemType: shared.DsRecord })
  dsRecords?: DsRecord[];

  @Metadata({ data: "json, name=nameServers" })
  nameServers?: string[];
}
