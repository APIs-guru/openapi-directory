import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesDraftRegistrationsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=draft_id" })
  draftId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


// NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributes
/** 
 * The properties of the draft registration entity.
**/
export class NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=datetime_initiated" })
  datetimeInitiated: Date;

  @Metadata({ data: "json, name=datetime_updated" })
  datetimeUpdated: Date;

  @Metadata({ data: "json, name=registration_metadata" })
  registrationMetadata?: string;

  @Metadata({ data: "json, name=registration_supplement" })
  registrationSupplement: string;
}


// NodesDraftRegistrationsPartialUpdateDraftRegistrationLinks
/** 
 * URLs to alternative representations of the draft registration entity.
**/
export class NodesDraftRegistrationsPartialUpdateDraftRegistrationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html: string;
}


// NodesDraftRegistrationsPartialUpdateDraftRegistrationRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the draft registration entity.
**/
export class NodesDraftRegistrationsPartialUpdateDraftRegistrationRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=branched_from" })
  branchedFrom: string;

  @Metadata({ data: "json, name=initiator" })
  initiator: string;

  @Metadata({ data: "json, name=registration_schema" })
  registrationSchema: string;
}


export class NodesDraftRegistrationsPartialUpdateDraftRegistration extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links: NodesDraftRegistrationsPartialUpdateDraftRegistrationLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: NodesDraftRegistrationsPartialUpdateDraftRegistrationRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class NodesDraftRegistrationsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesDraftRegistrationsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: NodesDraftRegistrationsPartialUpdateDraftRegistration;
}


export class NodesDraftRegistrationsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
