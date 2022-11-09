import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiClassifierOut } from "./apiclassifierout";
import { SoftwareVersionOut } from "./softwareversionout";


export class ApiClassifiersStatusOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=classifiers", elemType: shared.ApiClassifierOut })
  classifiers?: ApiClassifierOut[];

  @Metadata({ data: "json, name=softwareVersion" })
  softwareVersion?: SoftwareVersionOut;
}
