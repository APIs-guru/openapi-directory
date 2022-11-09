import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InputMappingLocationEnum {
    Unknown = "UNKNOWN"
,    Path = "PATH"
,    Query = "QUERY"
,    Body = "BODY"
,    Header = "HEADER"
}


// InputMapping
/** 
 * InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
**/
export class InputMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=location" })
  location?: InputMappingLocationEnum;

  @Metadata({ data: "json, name=methodMatch" })
  methodMatch?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
