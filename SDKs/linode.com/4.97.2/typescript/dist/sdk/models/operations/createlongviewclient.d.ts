import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLongviewClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateLongviewClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateLongviewClientRequest extends SpeakeasyBase {
    request: shared.LongviewClientInput;
    security: CreateLongviewClientSecurity;
}
export declare class CreateLongviewClientResponse extends SpeakeasyBase {
    contentType: string;
    longviewClient?: shared.LongviewClient;
    statusCode: number;
    createLongviewClientDefaultApplicationJsonObject?: CreateLongviewClientDefaultApplicationJson;
}
