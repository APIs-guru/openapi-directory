import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1BigQueryRoutineSpec } from "./googleclouddatacatalogv1bigqueryroutinespec";
import { GoogleCloudDatacatalogV1RoutineSpecArgument } from "./googleclouddatacatalogv1routinespecargument";
export declare enum GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED",
    ScalarFunction = "SCALAR_FUNCTION",
    Procedure = "PROCEDURE"
}
/**
 * Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
**/
export declare class GoogleCloudDatacatalogV1RoutineSpec extends SpeakeasyBase {
    bigqueryRoutineSpec?: GoogleCloudDatacatalogV1BigQueryRoutineSpec;
    definitionBody?: string;
    language?: string;
    returnType?: string;
    routineArguments?: GoogleCloudDatacatalogV1RoutineSpecArgument[];
    routineType?: GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum;
}
