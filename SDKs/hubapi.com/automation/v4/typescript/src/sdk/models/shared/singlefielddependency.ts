import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SingleFieldDependencyDependencyTypeEnum {
    SingleField = "SINGLE_FIELD"
}


export class SingleFieldDependency extends SpeakeasyBase {
  @Metadata({ data: "json, name=controllingFieldName" })
  controllingFieldName: string;

  @Metadata({ data: "json, name=dependencyType" })
  dependencyType: SingleFieldDependencyDependencyTypeEnum;

  @Metadata({ data: "json, name=dependentFieldNames" })
  dependentFieldNames: string[];
}
