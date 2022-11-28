import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReplicasDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abandonInstance" })
  abandonInstance?: boolean;
}
