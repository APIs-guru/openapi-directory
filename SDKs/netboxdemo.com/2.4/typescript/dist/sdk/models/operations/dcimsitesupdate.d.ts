import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimSitesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimSitesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimSitesUpdatePathParams;
    request: shared.WritableSiteInput;
}
export declare class DcimSitesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
