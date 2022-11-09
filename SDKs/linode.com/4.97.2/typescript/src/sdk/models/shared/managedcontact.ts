import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedContactPhone
/** 
 * Information about how to reach this Contact by phone.
 * 
**/
export class ManagedContactPhone extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: string;

  @Metadata({ data: "json, name=secondary" })
  secondary?: string;
}


// ManagedContact
/** 
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
 * 
**/
export class ManagedContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: ManagedContactPhone;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
