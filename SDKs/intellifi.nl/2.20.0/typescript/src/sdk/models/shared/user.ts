import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @Metadata({ data: "json, name=is_locked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
