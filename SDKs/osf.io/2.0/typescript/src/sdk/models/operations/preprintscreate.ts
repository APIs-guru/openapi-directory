import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PreprintsCreatePreprintAttributes
/** 
 * The properties of the preprint entity.
**/
export class PreprintsCreatePreprintAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_modified" })
  dateModified?: Date;

  @Metadata({ data: "json, name=date_published" })
  datePublished?: Date;

  @Metadata({ data: "json, name=doi" })
  doi?: string;

  @Metadata({ data: "json, name=is_preprint_orphan" })
  isPreprintOrphan?: boolean;

  @Metadata({ data: "json, name=license_record" })
  licenseRecord?: string;

  @Metadata({ data: "json, name=subjects" })
  subjects?: string[];
}


// PreprintsCreatePreprintLinks
/** 
 * URLs to alternative representations of the preprint entity.
**/
export class PreprintsCreatePreprintLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=doi" })
  doi?: string;

  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=preprint_doi" })
  preprintDoi?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;
}


// PreprintsCreatePreprintRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the preprint entity.
**/
export class PreprintsCreatePreprintRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=citation" })
  citation?: string;

  @Metadata({ data: "json, name=identifiers" })
  identifiers?: string;

  @Metadata({ data: "json, name=license" })
  license?: string;

  @Metadata({ data: "json, name=node" })
  node: string;

  @Metadata({ data: "json, name=primary_file" })
  primaryFile: string;

  @Metadata({ data: "json, name=provider" })
  provider: string;
}


export class PreprintsCreatePreprint extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: PreprintsCreatePreprintAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=links" })
  links?: PreprintsCreatePreprintLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: PreprintsCreatePreprintRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class PreprintsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PreprintsCreatePreprint;
}


export class PreprintsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
