import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimSitesCreateRequest extends SpeakeasyBase {
    request: shared.WritableSiteInput;
}
export declare class DcimSitesCreateResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
