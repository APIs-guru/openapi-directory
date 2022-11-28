import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1CompaniesRegionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1CompaniesRegionsIdPathParams;
}
export declare class DeleteSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
    contentType: string;
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
}
