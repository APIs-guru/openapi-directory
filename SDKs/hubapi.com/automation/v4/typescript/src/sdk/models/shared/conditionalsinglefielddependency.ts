import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConditionalSingleFieldDependencyDependencyTypeEnum {
    ConditionalSingleField = "CONDITIONAL_SINGLE_FIELD"
}


export class ConditionalSingleFieldDependency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controllingFieldName" })
  controllingFieldName: string;

  @SpeakeasyMetadata({ data: "json, name=controllingFieldValue" })
  controllingFieldValue: string;

  @SpeakeasyMetadata({ data: "json, name=dependencyType" })
  dependencyType: ConditionalSingleFieldDependencyDependencyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dependentFieldNames" })
  dependentFieldNames: string[];
}
