import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Moderator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avatarUrl" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;
}
