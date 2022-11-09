import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CurrentKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=current" })
  current?: boolean;
}
