import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiClassifierOut
/** 
 * The list of classifiers and versions.
**/
export class ApiClassifierOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=classifierName" })
  classifierName?: string;

  @Metadata({ data: "json, name=learning" })
  learning?: boolean;

  @Metadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: boolean;

  @Metadata({ data: "json, name=serving" })
  serving?: boolean;

  @Metadata({ data: "json, name=shuttingDown" })
  shuttingDown?: boolean;
}
