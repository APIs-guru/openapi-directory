import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityMention } from "./entitymention";


export enum EntityTypeEnum {
    Unknown = "UNKNOWN",
    Person = "PERSON",
    Location = "LOCATION",
    Organization = "ORGANIZATION",
    Event = "EVENT",
    WorkOfArt = "WORK_OF_ART",
    ConsumerGood = "CONSUMER_GOOD",
    Other = "OTHER"
}


// Entity
/** 
 * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mentions", elemType: EntityMention })
  mentions?: EntityMention[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=salience" })
  salience?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EntityTypeEnum;
}
