import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SuffixOptionEnum {
    OptionUnspecified = "OPTION_UNSPECIFIED"
,    Unguessable = "UNGUESSABLE"
,    Short = "SHORT"
,    Custom = "CUSTOM"
}


// Suffix
/** 
 * Short Dynamic Link suffix.
**/
export class Suffix extends SpeakeasyBase {
  @Metadata({ data: "json, name=customSuffix" })
  customSuffix?: string;

  @Metadata({ data: "json, name=option" })
  option?: SuffixOptionEnum;
}
