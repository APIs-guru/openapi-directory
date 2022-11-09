import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventAttendee extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalGuests" })
  additionalGuests?: number;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;

  @Metadata({ data: "json, name=organizer" })
  organizer?: boolean;

  @Metadata({ data: "json, name=resource" })
  resource?: boolean;

  @Metadata({ data: "json, name=responseStatus" })
  responseStatus?: string;

  @Metadata({ data: "json, name=self" })
  self?: boolean;
}
