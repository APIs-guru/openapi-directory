import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTagPathParams extends SpeakeasyBase {
    label: string;
}
export declare class DeleteTagSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteTagDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteTagRequest extends SpeakeasyBase {
    pathParams: DeleteTagPathParams;
    security: DeleteTagSecurity;
}
export declare class DeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteTag200ApplicationJsonObject?: Map<string, any>;
    deleteTagDefaultApplicationJsonObject?: DeleteTagDefaultApplicationJson;
}
