import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedContactPhone
/** 
 * Information about how to reach this Contact by phone.
 * 
**/
export class ManagedContactPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary" })
  secondary?: string;
}


// ManagedContactInput
/** 
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
 * 
**/
export class ManagedContactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: ManagedContactPhone;
}


// ManagedContact
/** 
 * Information about someone Linode's special forces may contact in case an issue is detected with a manager service.
 * 
**/
export class ManagedContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: ManagedContactPhone;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
