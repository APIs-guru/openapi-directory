import { SpeakeasyBase } from "../../../internal/utils";
import { ApiClassifierOut } from "./apiclassifierout";
import { SoftwareVersionOut } from "./softwareversionout";
export declare class ApiClassifiersStatusOut extends SpeakeasyBase {
    classifiers?: ApiClassifierOut[];
    softwareVersion?: SoftwareVersionOut;
}
