import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DynamicGroupQueryResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    User = "USER"
}


// DynamicGroupQuery
/** 
 * Defines a query on a resource.
**/
export class DynamicGroupQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: DynamicGroupQueryResourceTypeEnum;
}
