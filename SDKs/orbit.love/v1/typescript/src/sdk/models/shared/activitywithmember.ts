import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Member } from "./member";


export class ActivityWithMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=activity_type" })
  activityType?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=link_text" })
  linkText?: string;

  @Metadata({ data: "json, name=member" })
  member?: Member;

  @Metadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=weight" })
  weight?: string;
}
