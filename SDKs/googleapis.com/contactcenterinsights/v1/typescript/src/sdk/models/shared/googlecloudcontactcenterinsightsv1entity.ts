import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";


export enum GoogleCloudContactcenterinsightsV1EntityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Person = "PERSON",
    Location = "LOCATION",
    Organization = "ORGANIZATION",
    Event = "EVENT",
    WorkOfArt = "WORK_OF_ART",
    ConsumerGood = "CONSUMER_GOOD",
    Other = "OTHER",
    PhoneNumber = "PHONE_NUMBER",
    Address = "ADDRESS",
    Date = "DATE",
    Number = "NUMBER",
    Price = "PRICE"
}


// GoogleCloudContactcenterinsightsV1Entity
/** 
 * The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
**/
export class GoogleCloudContactcenterinsightsV1Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=salience" })
  salience?: number;

  @SpeakeasyMetadata({ data: "json, name=sentiment" })
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudContactcenterinsightsV1EntityTypeEnum;
}
