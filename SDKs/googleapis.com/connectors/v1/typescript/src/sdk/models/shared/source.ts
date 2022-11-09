import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SourceSourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED"
,    ConfigVariable = "CONFIG_VARIABLE"
}


// Source
/** 
 * Source to extract the backend from.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: SourceSourceTypeEnum;
}
