import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
