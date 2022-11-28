import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesDraftRegistrationsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


// NodesDraftRegistrationsCreateDraftRegistrationAttributesInput
/** 
 * The properties of the draft registration entity.
**/
export class NodesDraftRegistrationsCreateDraftRegistrationAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registration_metadata" })
  registrationMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=registration_supplement" })
  registrationSupplement: string;
}


export class NodesDraftRegistrationsCreateDraftRegistrationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: NodesDraftRegistrationsCreateDraftRegistrationAttributesInput;
}


export class NodesDraftRegistrationsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesDraftRegistrationsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesDraftRegistrationsCreateDraftRegistrationInput;
}


export class NodesDraftRegistrationsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
