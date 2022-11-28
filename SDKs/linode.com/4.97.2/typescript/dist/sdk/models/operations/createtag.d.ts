import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTagRequestBody extends SpeakeasyBase {
    domains?: number[];
    label: string;
    linodes?: number[];
    nodebalancers?: number[];
    volumes?: number[];
}
export declare class CreateTagSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateTagDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateTagRequest extends SpeakeasyBase {
    request?: CreateTagRequestBody;
    security: CreateTagSecurity;
}
export declare class CreateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
    createTagDefaultApplicationJsonObject?: CreateTagDefaultApplicationJson;
}
