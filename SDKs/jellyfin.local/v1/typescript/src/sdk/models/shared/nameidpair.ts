import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NameIdPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
