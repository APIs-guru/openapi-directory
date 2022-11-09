import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogoutResponseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user: string;
}

export enum LogoutResponseStatusEnum {
    Success = "success"
}


export class LogoutResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response" })
  response: LogoutResponseResponse;

  @Metadata({ data: "json, name=status" })
  status: LogoutResponseStatusEnum;
}
