import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateManagedContactPathParams extends SpeakeasyBase {
    contactId: number;
}
export declare class UpdateManagedContactSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateManagedContactDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateManagedContactRequest extends SpeakeasyBase {
    pathParams: UpdateManagedContactPathParams;
    request: shared.ManagedContactInput;
    security: UpdateManagedContactSecurity;
}
export declare class UpdateManagedContactResponse extends SpeakeasyBase {
    contentType: string;
    managedContact?: shared.ManagedContact;
    statusCode: number;
    updateManagedContactDefaultApplicationJsonObject?: UpdateManagedContactDefaultApplicationJson;
}
