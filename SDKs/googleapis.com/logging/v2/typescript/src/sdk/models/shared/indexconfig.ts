import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IndexConfigTypeEnum {
    IndexTypeUnspecified = "INDEX_TYPE_UNSPECIFIED"
,    IndexTypeString = "INDEX_TYPE_STRING"
,    IndexTypeInteger = "INDEX_TYPE_INTEGER"
}


// IndexConfig
/** 
 * Configuration for an indexed field.
**/
export class IndexConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=fieldPath" })
  fieldPath?: string;

  @Metadata({ data: "json, name=type" })
  type?: IndexConfigTypeEnum;
}
