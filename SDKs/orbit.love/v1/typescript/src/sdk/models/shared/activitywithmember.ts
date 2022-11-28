import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";



export class ActivityWithMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activity_type" })
  activityType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=link_text" })
  linkText?: string;

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: Member;

  @SpeakeasyMetadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: string;
}
