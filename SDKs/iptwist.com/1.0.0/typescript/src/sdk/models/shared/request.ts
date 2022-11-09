import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Request extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;
}
