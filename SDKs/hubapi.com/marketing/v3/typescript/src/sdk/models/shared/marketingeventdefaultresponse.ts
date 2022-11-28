import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyValue } from "./propertyvalue";



export class MarketingEventDefaultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customProperties", elemType: PropertyValue })
  customProperties?: PropertyValue[];

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventCancelled" })
  eventCancelled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventDescription" })
  eventDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName: string;

  @SpeakeasyMetadata({ data: "json, name=eventOrganizer" })
  eventOrganizer: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=eventUrl" })
  eventUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;
}
