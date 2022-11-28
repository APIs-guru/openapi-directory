import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetManagedContactPathParams extends SpeakeasyBase {
    contactId: number;
}
export declare class GetManagedContactSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetManagedContactDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetManagedContactRequest extends SpeakeasyBase {
    pathParams: GetManagedContactPathParams;
    security: GetManagedContactSecurity;
}
export declare class GetManagedContactResponse extends SpeakeasyBase {
    contentType: string;
    managedContact?: shared.ManagedContact;
    statusCode: number;
    getManagedContactDefaultApplicationJsonObject?: GetManagedContactDefaultApplicationJson;
}
