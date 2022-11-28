import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PreprintsCreatePreprintAttributesInput
/** 
 * The properties of the preprint entity.
**/
export class PreprintsCreatePreprintAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=license_record" })
  licenseRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=subjects" })
  subjects?: string[];
}


// PreprintsCreatePreprintRelationshipsInput
/** 
 * URLs to other entities or entity collections that have a relationship to the preprint entity.
**/
export class PreprintsCreatePreprintRelationshipsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "json, name=node" })
  node: string;

  @SpeakeasyMetadata({ data: "json, name=primary_file" })
  primaryFile: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;
}


export class PreprintsCreatePreprintInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: PreprintsCreatePreprintAttributesInput;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: PreprintsCreatePreprintRelationshipsInput;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class PreprintsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PreprintsCreatePreprintInput;
}


export class PreprintsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
