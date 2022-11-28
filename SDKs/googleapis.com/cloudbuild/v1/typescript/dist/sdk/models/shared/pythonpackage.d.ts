import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
**/
export declare class PythonPackage extends SpeakeasyBase {
    paths?: string[];
    repository?: string;
}
