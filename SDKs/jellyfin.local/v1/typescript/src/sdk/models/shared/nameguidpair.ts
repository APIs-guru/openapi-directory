import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NameGuidPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
