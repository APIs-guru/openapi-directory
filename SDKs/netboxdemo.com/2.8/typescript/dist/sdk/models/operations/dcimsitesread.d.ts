import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimSitesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimSitesReadRequest extends SpeakeasyBase {
    pathParams: DcimSitesReadPathParams;
}
export declare class DcimSitesReadResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
