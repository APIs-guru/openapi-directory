import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventAttendee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalGuests" })
  additionalGuests?: number;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=optional" })
  optional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=organizer" })
  organizer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: boolean;

  @SpeakeasyMetadata({ data: "json, name=responseStatus" })
  responseStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: boolean;
}
