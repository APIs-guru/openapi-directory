import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ErrorModelStatusEnum {
    Error = "error"
}


export class ErrorModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=response" })
  response?: string;

  @Metadata({ data: "json, name=status" })
  status?: ErrorModelStatusEnum;
}
