import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ObjectFilterStatusEnum {
    None = "NONE"
,    Assigned = "ASSIGNED"
,    All = "ALL"
}


// ObjectFilter
/** 
 * Object Filter.
**/
export class ObjectFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=objectIds" })
  objectIds?: string[];

  @Metadata({ data: "json, name=status" })
  status?: ObjectFilterStatusEnum;
}
