import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObjectTokenDataTypeEnum {
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


export class ObjectToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: ObjectTokenDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
