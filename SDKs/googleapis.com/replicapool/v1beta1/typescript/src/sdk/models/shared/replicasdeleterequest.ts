import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReplicasDeleteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=abandonInstance" })
  abandonInstance?: boolean;
}
