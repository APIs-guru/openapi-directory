import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityToken" })
  entityToken?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=userToken" })
  userToken?: string;
}
