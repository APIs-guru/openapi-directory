import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    In = "IN",
    Out = "OUT",
    Inout = "INOUT"
}


// GoogleCloudDatacatalogV1RoutineSpecArgument
/** 
 * Input or output argument of a function or stored procedure.
**/
export class GoogleCloudDatacatalogV1RoutineSpecArgument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
