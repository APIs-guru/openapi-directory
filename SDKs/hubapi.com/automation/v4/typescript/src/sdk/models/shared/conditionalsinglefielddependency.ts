import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConditionalSingleFieldDependencyDependencyTypeEnum {
    ConditionalSingleField = "CONDITIONAL_SINGLE_FIELD"
}


export class ConditionalSingleFieldDependency extends SpeakeasyBase {
  @Metadata({ data: "json, name=controllingFieldName" })
  controllingFieldName: string;

  @Metadata({ data: "json, name=controllingFieldValue" })
  controllingFieldValue: string;

  @Metadata({ data: "json, name=dependencyType" })
  dependencyType: ConditionalSingleFieldDependencyDependencyTypeEnum;

  @Metadata({ data: "json, name=dependentFieldNames" })
  dependentFieldNames: string[];
}
