import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ErrorModelStatusEnum {
    Error = "error"
}


export class ErrorModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ErrorModelStatusEnum;
}
