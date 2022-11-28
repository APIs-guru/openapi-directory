import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesDraftRegistrationsCreatePathParams extends SpeakeasyBase {
    nodeId: string;
}
/**
 * The properties of the draft registration entity.
**/
export declare class NodesDraftRegistrationsCreateDraftRegistrationAttributesInput extends SpeakeasyBase {
    registrationMetadata?: string;
    registrationSupplement: string;
}
export declare class NodesDraftRegistrationsCreateDraftRegistrationInput extends SpeakeasyBase {
    attributes: NodesDraftRegistrationsCreateDraftRegistrationAttributesInput;
}
export declare class NodesDraftRegistrationsCreateRequest extends SpeakeasyBase {
    pathParams: NodesDraftRegistrationsCreatePathParams;
    request: NodesDraftRegistrationsCreateDraftRegistrationInput;
}
export declare class NodesDraftRegistrationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
