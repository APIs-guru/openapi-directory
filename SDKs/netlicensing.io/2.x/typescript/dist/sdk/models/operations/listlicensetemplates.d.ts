import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListLicenseTemplatesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ListLicenseTemplatesRequest extends SpeakeasyBase {
    security: ListLicenseTemplatesSecurity;
}
export declare class ListLicenseTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensings?: any[];
}
