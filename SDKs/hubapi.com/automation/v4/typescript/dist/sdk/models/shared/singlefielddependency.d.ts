import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SingleFieldDependencyDependencyTypeEnum {
    SingleField = "SINGLE_FIELD"
}
export declare class SingleFieldDependency extends SpeakeasyBase {
    controllingFieldName: string;
    dependencyType: SingleFieldDependencyDependencyTypeEnum;
    dependentFieldNames: string[];
}
