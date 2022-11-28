import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SingleFieldDependencyDependencyTypeEnum {
    SingleField = "SINGLE_FIELD"
}


export class SingleFieldDependency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controllingFieldName" })
  controllingFieldName: string;

  @SpeakeasyMetadata({ data: "json, name=dependencyType" })
  dependencyType: SingleFieldDependencyDependencyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dependentFieldNames" })
  dependentFieldNames: string[];
}
