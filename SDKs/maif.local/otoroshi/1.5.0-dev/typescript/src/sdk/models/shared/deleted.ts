import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Deleted extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;
}
