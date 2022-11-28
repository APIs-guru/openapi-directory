import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteManagedContactPathParams extends SpeakeasyBase {
    contactId: number;
}
export declare class DeleteManagedContactSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteManagedContactDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteManagedContactRequest extends SpeakeasyBase {
    pathParams: DeleteManagedContactPathParams;
    security: DeleteManagedContactSecurity;
}
export declare class DeleteManagedContactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteManagedContact200ApplicationJsonObject?: Map<string, any>;
    deleteManagedContactDefaultApplicationJsonObject?: DeleteManagedContactDefaultApplicationJson;
}
