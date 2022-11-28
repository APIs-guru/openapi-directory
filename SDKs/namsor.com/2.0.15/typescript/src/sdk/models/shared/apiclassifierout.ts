import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiClassifierOut
/** 
 * The list of classifiers and versions.
**/
export class ApiClassifierOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classifierName" })
  classifierName?: string;

  @SpeakeasyMetadata({ data: "json, name=learning" })
  learning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serving" })
  serving?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shuttingDown" })
  shuttingDown?: boolean;
}
