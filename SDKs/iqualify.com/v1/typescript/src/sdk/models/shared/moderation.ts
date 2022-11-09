import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Moderator } from "./moderator";


export class Moderation extends SpeakeasyBase {
  @Metadata({ data: "json, name=isMuted" })
  isMuted?: boolean;

  @Metadata({ data: "json, name=moderator" })
  moderator?: Moderator;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
