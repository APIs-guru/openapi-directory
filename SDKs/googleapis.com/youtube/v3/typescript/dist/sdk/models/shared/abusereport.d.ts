import { SpeakeasyBase } from "../../../internal/utils";
import { AbuseType } from "./abusetype";
import { RelatedEntity } from "./relatedentity";
import { Entity } from "./entity";
export declare class AbuseReport extends SpeakeasyBase {
    abuseTypes?: AbuseType[];
    description?: string;
    relatedEntities?: RelatedEntity[];
    subject?: Entity;
}
