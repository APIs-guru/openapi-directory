import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LoginResponseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user: string;
}

export enum LoginResponseStatusEnum {
    Success = "success"
}


export class LoginResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response" })
  response: LoginResponseResponse;

  @Metadata({ data: "json, name=status" })
  status: LoginResponseStatusEnum;
}
