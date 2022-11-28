import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesDraftRegistrationsPartialUpdatePathParams extends SpeakeasyBase {
    draftId: string;
    nodeId: string;
}
/**
 * The properties of the draft registration entity.
**/
export declare class NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput extends SpeakeasyBase {
    registrationMetadata?: string;
    registrationSupplement: string;
}
export declare class NodesDraftRegistrationsPartialUpdateDraftRegistrationInput extends SpeakeasyBase {
    attributes: NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput;
}
export declare class NodesDraftRegistrationsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: NodesDraftRegistrationsPartialUpdatePathParams;
    request: NodesDraftRegistrationsPartialUpdateDraftRegistrationInput;
}
export declare class NodesDraftRegistrationsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
