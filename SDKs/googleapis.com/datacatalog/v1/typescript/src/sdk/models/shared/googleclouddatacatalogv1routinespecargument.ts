import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    In = "IN"
,    Out = "OUT"
,    Inout = "INOUT"
}


// GoogleCloudDatacatalogV1RoutineSpecArgument
/** 
 * Input or output argument of a function or stored procedure.
**/
export class GoogleCloudDatacatalogV1RoutineSpecArgument extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
