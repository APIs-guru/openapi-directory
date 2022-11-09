import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisplayOption } from "./displayoption";

export enum CardDisplayPropertyDataTypeEnum {
    Boolean = "BOOLEAN"
,    Currency = "CURRENCY"
,    Date = "DATE"
,    Datetime = "DATETIME"
,    Email = "EMAIL"
,    Link = "LINK"
,    Numeric = "NUMERIC"
,    String = "STRING"
,    Status = "STATUS"
}


// CardDisplayProperty
/** 
 * Definition for a card display property.
**/
export class CardDisplayProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType: CardDisplayPropertyDataTypeEnum;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=options", elemType: shared.DisplayOption })
  options: DisplayOption[];
}
