import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FindCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=serial" })
  serial?: string;
}
