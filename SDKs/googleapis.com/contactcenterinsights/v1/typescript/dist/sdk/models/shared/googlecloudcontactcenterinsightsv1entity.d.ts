import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
export declare enum GoogleCloudContactcenterinsightsV1EntityTypeEnum {
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
/**
 * The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
**/
export declare class GoogleCloudContactcenterinsightsV1Entity extends SpeakeasyBase {
    displayName?: string;
    metadata?: Map<string, string>;
    salience?: number;
    sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;
    type?: GoogleCloudContactcenterinsightsV1EntityTypeEnum;
}
