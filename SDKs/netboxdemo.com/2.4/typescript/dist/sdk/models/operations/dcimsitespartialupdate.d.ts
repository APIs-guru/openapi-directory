import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimSitesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimSitesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimSitesPartialUpdatePathParams;
    request: shared.WritableSiteInput;
}
export declare class DcimSitesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
