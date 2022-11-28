import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1CompaniesDomainsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1CompaniesDomainsIdPathParams;
}
export declare class DeleteSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
    companyDomainViewModel?: shared.CompanyDomainViewModel;
    contentType: string;
    statusCode: number;
}
