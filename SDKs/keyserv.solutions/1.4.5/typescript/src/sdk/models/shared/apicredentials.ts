import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;
}
