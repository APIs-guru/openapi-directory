import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;
}
