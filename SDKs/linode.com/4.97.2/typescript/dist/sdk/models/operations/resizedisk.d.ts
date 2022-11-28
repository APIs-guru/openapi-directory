import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResizeDiskPathParams extends SpeakeasyBase {
    diskId: number;
    linodeId: number;
}
export declare class ResizeDiskSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ResizeDiskDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ResizeDiskRequest extends SpeakeasyBase {
    pathParams: ResizeDiskPathParams;
    request: any;
    security: ResizeDiskSecurity;
}
export declare class ResizeDiskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resizeDisk200ApplicationJsonObject?: Map<string, any>;
    resizeDiskDefaultApplicationJsonObject?: ResizeDiskDefaultApplicationJson;
}
