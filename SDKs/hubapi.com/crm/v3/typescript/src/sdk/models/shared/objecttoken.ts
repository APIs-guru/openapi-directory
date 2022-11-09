import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ObjectTokenDataTypeEnum {
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


export class ObjectToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: ObjectTokenDataTypeEnum;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
