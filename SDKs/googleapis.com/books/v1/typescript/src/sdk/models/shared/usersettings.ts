import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsersettingsNotesExport
/** 
 * User settings in sub-objects, each for different purposes.
**/
export class UsersettingsNotesExport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folderName" })
  folderName?: string;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;
}


export class UsersettingsNotificationMatchMyInterests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationMoreFromAuthors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationMoreFromSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationPriceDrop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotificationRewardExpirations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opted_state" })
  optedState?: string;
}


export class UsersettingsNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchMyInterests" })
  matchMyInterests?: UsersettingsNotificationMatchMyInterests;

  @SpeakeasyMetadata({ data: "json, name=moreFromAuthors" })
  moreFromAuthors?: UsersettingsNotificationMoreFromAuthors;

  @SpeakeasyMetadata({ data: "json, name=moreFromSeries" })
  moreFromSeries?: UsersettingsNotificationMoreFromSeries;

  @SpeakeasyMetadata({ data: "json, name=priceDrop" })
  priceDrop?: UsersettingsNotificationPriceDrop;

  @SpeakeasyMetadata({ data: "json, name=rewardExpirations" })
  rewardExpirations?: UsersettingsNotificationRewardExpirations;
}


export class Usersettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=notesExport" })
  notesExport?: UsersettingsNotesExport;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: UsersettingsNotification;
}
