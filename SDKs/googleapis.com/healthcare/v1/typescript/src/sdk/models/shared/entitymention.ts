import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { LinkedEntity } from "./linkedentity";
import { TextSpan } from "./textspan";



// EntityMention
/** 
 * An entity mention in the document.
**/
export class EntityMention extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certaintyAssessment" })
  certaintyAssessment?: Feature;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=linkedEntities", elemType: LinkedEntity })
  linkedEntities?: LinkedEntity[];

  @SpeakeasyMetadata({ data: "json, name=mentionId" })
  mentionId?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: Feature;

  @SpeakeasyMetadata({ data: "json, name=temporalAssessment" })
  temporalAssessment?: Feature;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: TextSpan;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
