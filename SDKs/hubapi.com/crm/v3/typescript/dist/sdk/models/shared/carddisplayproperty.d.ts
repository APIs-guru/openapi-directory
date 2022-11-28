import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayOption } from "./displayoption";
export declare enum CardDisplayPropertyDataTypeEnum {
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
/**
 * Definition for a card display property.
**/
export declare class CardDisplayProperty extends SpeakeasyBase {
    dataType: CardDisplayPropertyDataTypeEnum;
    label: string;
    name: string;
    options: DisplayOption[];
}
