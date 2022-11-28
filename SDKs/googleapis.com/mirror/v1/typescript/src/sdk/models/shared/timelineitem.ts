import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Contact } from "./contact";
import { Location } from "./location";
import { MenuItem } from "./menuitem";
import { NotificationConfig } from "./notificationconfig";



// TimelineItem
/** 
 * Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
**/
export class TimelineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalUrl" })
  canonicalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: Contact;

  @SpeakeasyMetadata({ data: "json, name=displayTime" })
  displayTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=inReplyTo" })
  inReplyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=isBundleCover" })
  isBundleCover?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPinned" })
  isPinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=menuItems", elemType: MenuItem })
  menuItems?: MenuItem[];

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=pinScore" })
  pinScore?: number;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: Contact })
  recipients?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceItemId" })
  sourceItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=speakableText" })
  speakableText?: string;

  @SpeakeasyMetadata({ data: "json, name=speakableType" })
  speakableType?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
