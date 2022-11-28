import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IndexConfigTypeEnum {
    IndexTypeUnspecified = "INDEX_TYPE_UNSPECIFIED",
    IndexTypeString = "INDEX_TYPE_STRING",
    IndexTypeInteger = "INDEX_TYPE_INTEGER"
}


// IndexConfig
/** 
 * Configuration for an indexed field.
**/
export class IndexConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldPath" })
  fieldPath?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: IndexConfigTypeEnum;
}


// IndexConfigInput
/** 
 * Configuration for an indexed field.
**/
export class IndexConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldPath" })
  fieldPath?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: IndexConfigTypeEnum;
}
