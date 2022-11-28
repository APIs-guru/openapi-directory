import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1CompaniesRequests extends SpeakeasyBase {
    companyUpdateModel?: shared.CompanyUpdateModel;
    companyUpdateModel1?: shared.CompanyUpdateModel;
    companyUpdateModel2?: shared.CompanyUpdateModel;
    companyUpdateModel3?: shared.CompanyUpdateModel;
}
export declare class PutSetupV1CompaniesRequest extends SpeakeasyBase {
    request?: PutSetupV1CompaniesRequests;
}
export declare class PutSetupV1CompaniesResponse extends SpeakeasyBase {
    companyViewModel?: shared.CompanyViewModel;
    contentType: string;
    statusCode: number;
}
