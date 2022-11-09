import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PythonPackage
/** 
 * Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
**/
export class PythonPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=paths" })
  paths?: string[];

  @Metadata({ data: "json, name=repository" })
  repository?: string;
}
