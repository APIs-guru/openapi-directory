import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityMention } from "./entitymention";

export enum EntityTypeEnum {
    Unknown = "UNKNOWN"
,    Person = "PERSON"
,    Location = "LOCATION"
,    Organization = "ORGANIZATION"
,    Event = "EVENT"
,    WorkOfArt = "WORK_OF_ART"
,    ConsumerGood = "CONSUMER_GOOD"
,    Other = "OTHER"
}


// Entity
/** 
 * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
**/
export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=mentions", elemType: shared.EntityMention })
  mentions?: EntityMention[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=salience" })
  salience?: number;

  @Metadata({ data: "json, name=type" })
  type?: EntityTypeEnum;
}
