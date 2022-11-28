import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1BusinessusersEmailCompaniesPathParams extends SpeakeasyBase {
    email: string;
}
export declare class GetSetupV1BusinessusersEmailCompaniesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    searchText?: string;
}
export declare class GetSetupV1BusinessusersEmailCompaniesRequest extends SpeakeasyBase {
    pathParams: GetSetupV1BusinessusersEmailCompaniesPathParams;
    queryParams: GetSetupV1BusinessusersEmailCompaniesQueryParams;
}
export declare class GetSetupV1BusinessusersEmailCompaniesResponse extends SpeakeasyBase {
    authorizedCompanyListViewModel?: shared.AuthorizedCompanyListViewModel;
    contentType: string;
    statusCode: number;
}
