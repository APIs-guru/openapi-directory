import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { LinkedEntity } from "./linkedentity";
import { TextSpan } from "./textspan";
/**
 * An entity mention in the document.
**/
export declare class EntityMention extends SpeakeasyBase {
    certaintyAssessment?: Feature;
    confidence?: number;
    linkedEntities?: LinkedEntity[];
    mentionId?: string;
    subject?: Feature;
    temporalAssessment?: Feature;
    text?: TextSpan;
    type?: string;
}
