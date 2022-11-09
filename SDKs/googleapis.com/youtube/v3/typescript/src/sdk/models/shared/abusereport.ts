import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AbuseType } from "./abusetype";
import { RelatedEntity } from "./relatedentity";
import { Entity } from "./entity";


export class AbuseReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=abuseTypes", elemType: shared.AbuseType })
  abuseTypes?: AbuseType[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=relatedEntities", elemType: shared.RelatedEntity })
  relatedEntities?: RelatedEntity[];

  @Metadata({ data: "json, name=subject" })
  subject?: Entity;
}
