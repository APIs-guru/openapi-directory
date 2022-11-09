import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LevelDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}
