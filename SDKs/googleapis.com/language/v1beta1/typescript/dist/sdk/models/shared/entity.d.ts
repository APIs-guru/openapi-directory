import { SpeakeasyBase } from "../../../internal/utils";
import { EntityMention } from "./entitymention";
export declare enum EntityTypeEnum {
    Unknown = "UNKNOWN",
    Person = "PERSON",
    Location = "LOCATION",
    Organization = "ORGANIZATION",
    Event = "EVENT",
    WorkOfArt = "WORK_OF_ART",
    ConsumerGood = "CONSUMER_GOOD",
    Other = "OTHER"
}
/**
 * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
**/
export declare class Entity extends SpeakeasyBase {
    mentions?: EntityMention[];
    metadata?: Map<string, string>;
    name?: string;
    salience?: number;
    type?: EntityTypeEnum;
}
