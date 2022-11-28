import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PythonPackage
/** 
 * Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
**/
export class PythonPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;
}
