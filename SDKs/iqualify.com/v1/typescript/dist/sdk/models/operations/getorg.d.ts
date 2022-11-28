import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrgResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    orgResponse?: shared.OrgResponse;
    statusCode: number;
}
