import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrieveAUserPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveAUser200ApplicationJsonPerson extends SpeakeasyBase {
    email?: string;
}
export declare class RetrieveAUser200ApplicationJson extends SpeakeasyBase {
    avatarUrl?: any;
    id?: string;
    name?: string;
    object?: string;
    person?: RetrieveAUser200ApplicationJsonPerson;
    type?: string;
}
export declare class RetrieveAUserRequest extends SpeakeasyBase {
    pathParams: RetrieveAUserPathParams;
}
export declare class RetrieveAUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    retrieveAUser200ApplicationJsonObject?: RetrieveAUser200ApplicationJson;
}
