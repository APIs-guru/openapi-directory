import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisplayOption } from "./displayoption";


export enum CardDisplayPropertyDataTypeEnum {
    Boolean = "BOOLEAN",
    Currency = "CURRENCY",
    Date = "DATE",
    Datetime = "DATETIME",
    Email = "EMAIL",
    Link = "LINK",
    Numeric = "NUMERIC",
    String = "STRING",
    Status = "STATUS"
}


// CardDisplayProperty
/** 
 * Definition for a card display property.
**/
export class CardDisplayProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: CardDisplayPropertyDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: DisplayOption })
  options: DisplayOption[];
}
