import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeRpcAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "security, name=username" })
  username: string;
}
