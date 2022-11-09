import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RelevantLocationRelationTypeEnum {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED"
,    DepartmentOf = "DEPARTMENT_OF"
,    IndependentEstablishmentIn = "INDEPENDENT_ESTABLISHMENT_IN"
}


// RelevantLocation
/** 
 * Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.
**/
export class RelevantLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=relationType" })
  relationType?: RelevantLocationRelationTypeEnum;
}
