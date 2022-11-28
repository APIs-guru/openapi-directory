import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BinLogCoordinates } from "./binlogcoordinates";



// CloneContext
/** 
 * Database instance clone context.
**/
export class CloneContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedIpRange" })
  allocatedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=binLogCoordinates" })
  binLogCoordinates?: BinLogCoordinates;

  @SpeakeasyMetadata({ data: "json, name=databaseNames" })
  databaseNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=destinationInstanceName" })
  destinationInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pitrTimestampMs" })
  pitrTimestampMs?: string;

  @SpeakeasyMetadata({ data: "json, name=pointInTime" })
  pointInTime?: string;
}
