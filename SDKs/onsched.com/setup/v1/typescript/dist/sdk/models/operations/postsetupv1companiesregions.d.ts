import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1CompaniesRegionsRequests extends SpeakeasyBase {
    regionInputModel?: shared.RegionInputModel;
    regionInputModel1?: shared.RegionInputModel;
    regionInputModel2?: shared.RegionInputModel;
    regionInputModel3?: shared.RegionInputModel;
}
export declare class PostSetupV1CompaniesRegionsRequest extends SpeakeasyBase {
    request?: PostSetupV1CompaniesRegionsRequests;
}
export declare class PostSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
    contentType: string;
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
}
