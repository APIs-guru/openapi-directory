import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;
}
