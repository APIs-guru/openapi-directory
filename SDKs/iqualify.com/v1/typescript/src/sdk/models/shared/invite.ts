import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Invite extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
