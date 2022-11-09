import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DynamicGroupQueryResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED"
,    User = "USER"
}


// DynamicGroupQuery
/** 
 * Defines a query on a resource.
**/
export class DynamicGroupQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: DynamicGroupQueryResourceTypeEnum;
}
