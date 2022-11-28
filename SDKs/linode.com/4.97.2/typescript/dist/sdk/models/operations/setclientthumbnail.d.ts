import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetClientThumbnailPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class SetClientThumbnailSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class SetClientThumbnailDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class SetClientThumbnailRequest extends SpeakeasyBase {
    pathParams: SetClientThumbnailPathParams;
    request: Uint8Array;
    security: SetClientThumbnailSecurity;
}
export declare class SetClientThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setClientThumbnail200ApplicationJsonObject?: Map<string, any>;
    setClientThumbnailDefaultApplicationJsonObject?: SetClientThumbnailDefaultApplicationJson;
}
