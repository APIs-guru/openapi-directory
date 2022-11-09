import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityMention } from "./entitymention";
import { Sentiment } from "./sentiment";
export declare enum EntityTypeEnum {
    Unknown = "UNKNOWN",
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
 * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
**/
export declare class Entity extends SpeakeasyBase {
    mentions?: EntityMention[];
    metadata?: Map<string, string>;
    name?: string;
    salience?: number;
    sentiment?: Sentiment;
    type?: EntityTypeEnum;
}
