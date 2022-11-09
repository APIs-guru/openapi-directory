import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorDetail" })
  errorDetail?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=userMessage" })
  userMessage?: string;
}
