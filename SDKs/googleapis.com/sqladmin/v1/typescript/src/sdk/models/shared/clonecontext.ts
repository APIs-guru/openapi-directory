import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BinLogCoordinates } from "./binlogcoordinates";


// CloneContext
/** 
 * Database instance clone context.
**/
export class CloneContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocatedIpRange" })
  allocatedIpRange?: string;

  @Metadata({ data: "json, name=binLogCoordinates" })
  binLogCoordinates?: BinLogCoordinates;

  @Metadata({ data: "json, name=databaseNames" })
  databaseNames?: string[];

  @Metadata({ data: "json, name=destinationInstanceName" })
  destinationInstanceName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pitrTimestampMs" })
  pitrTimestampMs?: string;

  @Metadata({ data: "json, name=pointInTime" })
  pointInTime?: string;
}
