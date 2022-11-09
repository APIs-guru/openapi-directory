import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";

export enum GoogleCloudContactcenterinsightsV1EntityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Person = "PERSON"
,    Location = "LOCATION"
,    Organization = "ORGANIZATION"
,    Event = "EVENT"
,    WorkOfArt = "WORK_OF_ART"
,    ConsumerGood = "CONSUMER_GOOD"
,    Other = "OTHER"
,    PhoneNumber = "PHONE_NUMBER"
,    Address = "ADDRESS"
,    Date = "DATE"
,    Number = "NUMBER"
,    Price = "PRICE"
}


// GoogleCloudContactcenterinsightsV1Entity
/** 
 * The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
**/
export class GoogleCloudContactcenterinsightsV1Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=salience" })
  salience?: number;

  @Metadata({ data: "json, name=sentiment" })
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudContactcenterinsightsV1EntityTypeEnum;
}
