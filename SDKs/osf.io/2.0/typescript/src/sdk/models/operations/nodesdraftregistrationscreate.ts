import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesDraftRegistrationsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


// NodesDraftRegistrationsCreateDraftRegistrationAttributes
/** 
 * The properties of the draft registration entity.
**/
export class NodesDraftRegistrationsCreateDraftRegistrationAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=datetime_initiated" })
  datetimeInitiated: Date;

  @Metadata({ data: "json, name=datetime_updated" })
  datetimeUpdated: Date;

  @Metadata({ data: "json, name=registration_metadata" })
  registrationMetadata?: string;

  @Metadata({ data: "json, name=registration_supplement" })
  registrationSupplement: string;
}


// NodesDraftRegistrationsCreateDraftRegistrationLinks
/** 
 * URLs to alternative representations of the draft registration entity.
**/
export class NodesDraftRegistrationsCreateDraftRegistrationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html: string;
}


// NodesDraftRegistrationsCreateDraftRegistrationRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the draft registration entity.
**/
export class NodesDraftRegistrationsCreateDraftRegistrationRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=branched_from" })
  branchedFrom: string;

  @Metadata({ data: "json, name=initiator" })
  initiator: string;

  @Metadata({ data: "json, name=registration_schema" })
  registrationSchema: string;
}


export class NodesDraftRegistrationsCreateDraftRegistration extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: NodesDraftRegistrationsCreateDraftRegistrationAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links: NodesDraftRegistrationsCreateDraftRegistrationLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: NodesDraftRegistrationsCreateDraftRegistrationRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class NodesDraftRegistrationsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesDraftRegistrationsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: NodesDraftRegistrationsCreateDraftRegistration;
}


export class NodesDraftRegistrationsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
