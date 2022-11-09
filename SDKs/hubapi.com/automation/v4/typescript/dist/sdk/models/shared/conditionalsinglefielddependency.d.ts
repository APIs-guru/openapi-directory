import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ConditionalSingleFieldDependencyDependencyTypeEnum {
    ConditionalSingleField = "CONDITIONAL_SINGLE_FIELD"
}
export declare class ConditionalSingleFieldDependency extends SpeakeasyBase {
    controllingFieldName: string;
    controllingFieldValue: string;
    dependencyType: ConditionalSingleFieldDependencyDependencyTypeEnum;
    dependentFieldNames: string[];
}
