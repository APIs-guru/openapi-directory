import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogoutResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}

export enum LogoutResponseStatusEnum {
    Success = "success"
}


export class LogoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: LogoutResponseResponse;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LogoutResponseStatusEnum;
}
