import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UvarFilterMatchEnum {
    Unspecified = "UNSPECIFIED",
    Exact = "EXACT",
    Contains = "CONTAINS"
}


// UvarFilter
/** 
 * Defines the filtering on a single uvar.
**/
export class UvarFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complement" })
  complement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: UvarFilterMatchEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
