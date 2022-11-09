import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyValue } from "./propertyvalue";


export class MarketingEventPublicReadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attendees" })
  attendees: number;

  @Metadata({ data: "json, name=cancellations" })
  cancellations: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=customProperties", elemType: shared.PropertyValue })
  customProperties?: PropertyValue[];

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=eventCancelled" })
  eventCancelled?: boolean;

  @Metadata({ data: "json, name=eventDescription" })
  eventDescription?: string;

  @Metadata({ data: "json, name=eventName" })
  eventName: string;

  @Metadata({ data: "json, name=eventOrganizer" })
  eventOrganizer: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=eventUrl" })
  eventUrl?: string;

  @Metadata({ data: "json, name=externalEventId" })
  externalEventId: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=noShows" })
  noShows: number;

  @Metadata({ data: "json, name=registrants" })
  registrants: number;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
