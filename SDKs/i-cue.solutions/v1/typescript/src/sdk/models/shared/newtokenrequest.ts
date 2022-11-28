import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityToken" })
  entityToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=userToken" })
  userToken?: string;
}
