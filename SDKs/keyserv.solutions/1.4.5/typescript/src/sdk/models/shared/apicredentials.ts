import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=serial" })
  serial?: string;
}
