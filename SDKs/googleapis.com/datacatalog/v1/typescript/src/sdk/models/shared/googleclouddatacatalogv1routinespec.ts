import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1BigQueryRoutineSpec } from "./googleclouddatacatalogv1bigqueryroutinespec";
import { GoogleCloudDatacatalogV1RoutineSpecArgument } from "./googleclouddatacatalogv1routinespecargument";


export enum GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED",
    ScalarFunction = "SCALAR_FUNCTION",
    Procedure = "PROCEDURE"
}


// GoogleCloudDatacatalogV1RoutineSpec
/** 
 * Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
**/
export class GoogleCloudDatacatalogV1RoutineSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryRoutineSpec" })
  bigqueryRoutineSpec?: GoogleCloudDatacatalogV1BigQueryRoutineSpec;

  @SpeakeasyMetadata({ data: "json, name=definitionBody" })
  definitionBody?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=returnType" })
  returnType?: string;

  @SpeakeasyMetadata({ data: "json, name=routineArguments", elemType: GoogleCloudDatacatalogV1RoutineSpecArgument })
  routineArguments?: GoogleCloudDatacatalogV1RoutineSpecArgument[];

  @SpeakeasyMetadata({ data: "json, name=routineType" })
  routineType?: GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum;
}
