import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AbuseType } from "./abusetype";
import { RelatedEntity } from "./relatedentity";
import { Entity } from "./entity";



export class AbuseReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abuseTypes", elemType: AbuseType })
  abuseTypes?: AbuseType[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedEntities", elemType: RelatedEntity })
  relatedEntities?: RelatedEntity[];

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: Entity;
}
