import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LoginResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}

export enum LoginResponseStatusEnum {
    Success = "success"
}


export class LoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: LoginResponseResponse;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LoginResponseStatusEnum;
}
