import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Feature } from "./feature";
import { LinkedEntity } from "./linkedentity";
import { Feature } from "./feature";
import { Feature } from "./feature";
import { TextSpan } from "./textspan";


// EntityMention
/** 
 * An entity mention in the document.
**/
export class EntityMention extends SpeakeasyBase {
  @Metadata({ data: "json, name=certaintyAssessment" })
  certaintyAssessment?: Feature;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=linkedEntities", elemType: shared.LinkedEntity })
  linkedEntities?: LinkedEntity[];

  @Metadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: Feature;

  @Metadata({ data: "json, name=temporalAssessment" })
  temporalAssessment?: Feature;

  @Metadata({ data: "json, name=text" })
  text?: TextSpan;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
