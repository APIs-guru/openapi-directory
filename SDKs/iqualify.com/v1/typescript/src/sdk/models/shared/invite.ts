import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Invite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
