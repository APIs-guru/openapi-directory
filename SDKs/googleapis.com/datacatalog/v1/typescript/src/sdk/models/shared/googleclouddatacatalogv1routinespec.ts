import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1BigQueryRoutineSpec } from "./googleclouddatacatalogv1bigqueryroutinespec";
import { GoogleCloudDatacatalogV1RoutineSpecArgument } from "./googleclouddatacatalogv1routinespecargument";

export enum GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum {
    RoutineTypeUnspecified = "ROUTINE_TYPE_UNSPECIFIED"
,    ScalarFunction = "SCALAR_FUNCTION"
,    Procedure = "PROCEDURE"
}


// GoogleCloudDatacatalogV1RoutineSpec
/** 
 * Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
**/
export class GoogleCloudDatacatalogV1RoutineSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryRoutineSpec" })
  bigqueryRoutineSpec?: GoogleCloudDatacatalogV1BigQueryRoutineSpec;

  @Metadata({ data: "json, name=definitionBody" })
  definitionBody?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=returnType" })
  returnType?: string;

  @Metadata({ data: "json, name=routineArguments", elemType: shared.GoogleCloudDatacatalogV1RoutineSpecArgument })
  routineArguments?: GoogleCloudDatacatalogV1RoutineSpecArgument[];

  @Metadata({ data: "json, name=routineType" })
  routineType?: GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum;
}
