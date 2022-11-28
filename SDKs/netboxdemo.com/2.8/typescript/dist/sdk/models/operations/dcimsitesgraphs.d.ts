import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimSitesGraphsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimSitesGraphsRequest extends SpeakeasyBase {
    pathParams: DcimSitesGraphsPathParams;
}
export declare class DcimSitesGraphsResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
