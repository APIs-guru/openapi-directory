import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesDraftRegistrationsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=draft_id" })
  draftId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


// NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput
/** 
 * The properties of the draft registration entity.
**/
export class NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registration_metadata" })
  registrationMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=registration_supplement" })
  registrationSupplement: string;
}


export class NodesDraftRegistrationsPartialUpdateDraftRegistrationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput;
}


export class NodesDraftRegistrationsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesDraftRegistrationsPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesDraftRegistrationsPartialUpdateDraftRegistrationInput;
}


export class NodesDraftRegistrationsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
