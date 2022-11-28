import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OrgUnits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudidentityOrgUnitsMembershipsList - List OrgMembership resources in an OrgUnit treated as 'parent'. Parent format: orgUnits/{$orgUnitId} where `$orgUnitId` is the `orgUnitId` from the [Admin SDK `OrgUnit` resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/orgunits)
    **/
    cloudidentityOrgUnitsMembershipsList(req: operations.CloudidentityOrgUnitsMembershipsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityOrgUnitsMembershipsListResponse>;
    /**
     * cloudidentityOrgUnitsMembershipsMove - Move an OrgMembership to a new OrgUnit. NOTE: This is an atomic copy-and-delete. The resource will have a new copy under the destination OrgUnit and be deleted from the source OrgUnit. The resource can only be searched under the destination OrgUnit afterwards.
    **/
    cloudidentityOrgUnitsMembershipsMove(req: operations.CloudidentityOrgUnitsMembershipsMoveRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityOrgUnitsMembershipsMoveResponse>;
}
