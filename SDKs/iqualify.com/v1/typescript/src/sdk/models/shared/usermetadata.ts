import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
