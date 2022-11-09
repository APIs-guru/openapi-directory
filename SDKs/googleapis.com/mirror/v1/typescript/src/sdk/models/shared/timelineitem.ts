import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attachment } from "./attachment";
import { Contact } from "./contact";
import { Location } from "./location";
import { MenuItem } from "./menuitem";
import { NotificationConfig } from "./notificationconfig";
import { Contact } from "./contact";


// TimelineItem
/** 
 * Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
**/
export class TimelineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];

  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=canonicalUrl" })
  canonicalUrl?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=creator" })
  creator?: Contact;

  @Metadata({ data: "json, name=displayTime" })
  displayTime?: Date;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inReplyTo" })
  inReplyTo?: string;

  @Metadata({ data: "json, name=isBundleCover" })
  isBundleCover?: boolean;

  @Metadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;

  @Metadata({ data: "json, name=isPinned" })
  isPinned?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=menuItems", elemType: shared.MenuItem })
  menuItems?: MenuItem[];

  @Metadata({ data: "json, name=notification" })
  notification?: NotificationConfig;

  @Metadata({ data: "json, name=pinScore" })
  pinScore?: number;

  @Metadata({ data: "json, name=recipients", elemType: shared.Contact })
  recipients?: Contact[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=sourceItemId" })
  sourceItemId?: string;

  @Metadata({ data: "json, name=speakableText" })
  speakableText?: string;

  @Metadata({ data: "json, name=speakableType" })
  speakableType?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
