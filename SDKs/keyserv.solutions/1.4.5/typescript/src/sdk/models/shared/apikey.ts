import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;
}
