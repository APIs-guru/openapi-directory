import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAdministrationEntityHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostAdministrationEntityRequests extends SpeakeasyBase {
    newEntityRequest?: shared.NewEntityRequest;
    newEntityRequest1?: shared.NewEntityRequest;
    newEntityRequest2?: shared.NewEntityRequest;
}
export declare class PostAdministrationEntityRequest extends SpeakeasyBase {
    headers: PostAdministrationEntityHeaders;
    request?: PostAdministrationEntityRequests;
}
export declare class PostAdministrationEntityResponse extends SpeakeasyBase {
    contentType: string;
    postAdministrationEntity200ApplicationJsonUuidString?: string;
    postAdministrationEntity200TextJsonUuidString?: string;
    postAdministrationEntity200TextPlainUuidString?: string;
    statusCode: number;
}
