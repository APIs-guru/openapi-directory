import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1CompaniesRegionsIdRequests extends SpeakeasyBase {
    regionUpdateModel?: shared.RegionUpdateModel;
    regionUpdateModel1?: shared.RegionUpdateModel;
    regionUpdateModel2?: shared.RegionUpdateModel;
    regionUpdateModel3?: shared.RegionUpdateModel;
}
export declare class PutSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1CompaniesRegionsIdPathParams;
    request?: PutSetupV1CompaniesRegionsIdRequests;
}
export declare class PutSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
    contentType: string;
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
}
