import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { Contact } from "./contact";
import { Location } from "./location";
import { MenuItem } from "./menuitem";
import { NotificationConfig } from "./notificationconfig";
/**
 * Each item in the user's timeline is represented as a TimelineItem JSON structure, described below.
**/
export declare class TimelineItem extends SpeakeasyBase {
    attachments?: Attachment[];
    bundleId?: string;
    canonicalUrl?: string;
    created?: Date;
    creator?: Contact;
    displayTime?: Date;
    etag?: string;
    html?: string;
    id?: string;
    inReplyTo?: string;
    isBundleCover?: boolean;
    isDeleted?: boolean;
    isPinned?: boolean;
    kind?: string;
    location?: Location;
    menuItems?: MenuItem[];
    notification?: NotificationConfig;
    pinScore?: number;
    recipients?: Contact[];
    selfLink?: string;
    sourceItemId?: string;
    speakableText?: string;
    speakableType?: string;
    text?: string;
    title?: string;
    updated?: Date;
}
