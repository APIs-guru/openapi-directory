import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Moderator } from "./moderator";



export class Moderation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isMuted" })
  isMuted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=moderator" })
  moderator?: Moderator;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
