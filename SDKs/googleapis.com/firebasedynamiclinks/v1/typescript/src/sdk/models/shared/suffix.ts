import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SuffixOptionEnum {
    OptionUnspecified = "OPTION_UNSPECIFIED",
    Unguessable = "UNGUESSABLE",
    Short = "SHORT",
    Custom = "CUSTOM"
}


// Suffix
/** 
 * Short Dynamic Link suffix.
**/
export class Suffix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customSuffix" })
  customSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=option" })
  option?: SuffixOptionEnum;
}
