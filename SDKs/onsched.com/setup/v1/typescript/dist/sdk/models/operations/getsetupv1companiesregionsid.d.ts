import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CompaniesRegionsIdPathParams;
}
export declare class GetSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
    contentType: string;
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
}
