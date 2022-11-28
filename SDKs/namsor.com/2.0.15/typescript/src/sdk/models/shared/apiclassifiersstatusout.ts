import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiClassifierOut } from "./apiclassifierout";
import { SoftwareVersionOut } from "./softwareversionout";



export class ApiClassifiersStatusOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classifiers", elemType: ApiClassifierOut })
  classifiers?: ApiClassifierOut[];

  @SpeakeasyMetadata({ data: "json, name=softwareVersion" })
  softwareVersion?: SoftwareVersionOut;
}
