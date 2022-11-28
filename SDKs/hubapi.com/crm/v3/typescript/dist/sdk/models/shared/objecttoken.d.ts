import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObjectTokenDataTypeEnum {
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
export declare class ObjectToken extends SpeakeasyBase {
    dataType?: ObjectTokenDataTypeEnum;
    label?: string;
    name?: string;
    value: string;
}
