import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_locked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}


export class UserOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_locked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
