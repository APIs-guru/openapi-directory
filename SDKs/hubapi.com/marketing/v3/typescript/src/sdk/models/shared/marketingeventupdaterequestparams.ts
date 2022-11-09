import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyValue } from "./propertyvalue";


export class MarketingEventUpdateRequestParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=customProperties", elemType: shared.PropertyValue })
  customProperties?: PropertyValue[];

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=eventCancelled" })
  eventCancelled?: boolean;

  @Metadata({ data: "json, name=eventDescription" })
  eventDescription?: string;

  @Metadata({ data: "json, name=eventName" })
  eventName?: string;

  @Metadata({ data: "json, name=eventOrganizer" })
  eventOrganizer?: string;

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=eventUrl" })
  eventUrl?: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;
}
