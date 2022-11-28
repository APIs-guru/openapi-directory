import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObjectFilterStatusEnum {
    None = "NONE",
    Assigned = "ASSIGNED",
    All = "ALL"
}


// ObjectFilter
/** 
 * Object Filter.
**/
export class ObjectFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ObjectFilterStatusEnum;
}
