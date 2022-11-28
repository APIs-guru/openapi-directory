import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResolutionsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ResolutionsRequest extends SpeakeasyBase {
    security: ResolutionsSecurity;
}
export declare class ResolutionsResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    statusCode: number;
    resolutions?: any;
}
