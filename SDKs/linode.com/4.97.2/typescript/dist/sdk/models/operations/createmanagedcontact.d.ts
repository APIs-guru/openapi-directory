import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateManagedContactSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateManagedContactDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateManagedContactRequest extends SpeakeasyBase {
    request?: shared.ManagedContactInput;
    security: CreateManagedContactSecurity;
}
export declare class CreateManagedContactResponse extends SpeakeasyBase {
    contentType: string;
    managedContact?: shared.ManagedContact;
    statusCode: number;
    createManagedContactDefaultApplicationJsonObject?: CreateManagedContactDefaultApplicationJson;
}
