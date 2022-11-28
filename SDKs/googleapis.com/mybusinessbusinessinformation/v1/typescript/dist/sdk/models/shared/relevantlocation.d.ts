import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RelevantLocationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    DepartmentOf = "DEPARTMENT_OF",
    IndependentEstablishmentIn = "INDEPENDENT_ESTABLISHMENT_IN"
}
/**
 * Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.
**/
export declare class RelevantLocation extends SpeakeasyBase {
    placeId?: string;
    relationType?: RelevantLocationRelationTypeEnum;
}
