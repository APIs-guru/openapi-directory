import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1CompaniesRequests extends SpeakeasyBase {
    companyInputModel?: shared.CompanyInputModel;
    companyInputModel1?: shared.CompanyInputModel;
    companyInputModel2?: shared.CompanyInputModel;
    companyInputModel3?: shared.CompanyInputModel;
}
export declare class PostSetupV1CompaniesRequest extends SpeakeasyBase {
    request?: PostSetupV1CompaniesRequests;
}
export declare class PostSetupV1CompaniesResponse extends SpeakeasyBase {
    companyViewModel?: shared.CompanyViewModel;
    contentType: string;
    statusCode: number;
}
