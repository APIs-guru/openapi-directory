import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CountOf extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;
}
