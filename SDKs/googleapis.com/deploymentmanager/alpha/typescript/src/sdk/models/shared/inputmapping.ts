import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InputMappingLocationEnum {
    Unknown = "UNKNOWN",
    Path = "PATH",
    Query = "QUERY",
    Body = "BODY",
    Header = "HEADER"
}


// InputMapping
/** 
 * InputMapping creates a 'virtual' property that will be injected into the properties before sending the request to the underlying API.
**/
export class InputMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: InputMappingLocationEnum;

  @SpeakeasyMetadata({ data: "json, name=methodMatch" })
  methodMatch?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
