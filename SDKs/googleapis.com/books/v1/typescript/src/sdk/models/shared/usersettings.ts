import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UsersettingsNotesExport
/** 
 * User settings in sub-objects, each for different purposes.
**/
export class UsersettingsNotesExport extends SpeakeasyBase {
  @Metadata({ data: "json, name=folderName" })
  folderName?: string;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;
}


export class UsersettingsNotificationMatchMyInterests extends SpeakeasyBase {
  @Metadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationMoreFromAuthors extends SpeakeasyBase {
  @Metadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationMoreFromSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationPriceDrop extends SpeakeasyBase {
  @Metadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationRewardExpirations extends SpeakeasyBase {
  @Metadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchMyInterests" })
  matchMyInterests?: UsersettingsNotificationMatchMyInterests;

  @Metadata({ data: "json, name=moreFromAuthors" })
  moreFromAuthors?: UsersettingsNotificationMoreFromAuthors;

  @Metadata({ data: "json, name=moreFromSeries" })
  moreFromSeries?: UsersettingsNotificationMoreFromSeries;

  @Metadata({ data: "json, name=priceDrop" })
  priceDrop?: UsersettingsNotificationPriceDrop;

  @Metadata({ data: "json, name=rewardExpirations" })
  rewardExpirations?: UsersettingsNotificationRewardExpirations;
}


export class Usersettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=notesExport" })
  notesExport?: UsersettingsNotesExport;

  @Metadata({ data: "json, name=notification" })
  notification?: UsersettingsNotification;
}
