import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SourceSourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED",
    ConfigVariable = "CONFIG_VARIABLE"
}


// Source
/** 
 * Source to extract the backend from.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: SourceSourceTypeEnum;
}
