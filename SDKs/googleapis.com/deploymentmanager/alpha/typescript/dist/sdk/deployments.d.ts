import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Deployments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deploymentmanagerDeploymentsCancelPreview - Cancels and removes the preview currently associated with the deployment.
    **/
    deploymentmanagerDeploymentsCancelPreview(req: operations.DeploymentmanagerDeploymentsCancelPreviewRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsCancelPreviewResponse>;
    /**
     * deploymentmanagerDeploymentsDelete - Deletes a deployment and all of the resources in the deployment.
    **/
    deploymentmanagerDeploymentsDelete(req: operations.DeploymentmanagerDeploymentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsDeleteResponse>;
    /**
     * deploymentmanagerDeploymentsGet - Gets information about a specific deployment.
    **/
    deploymentmanagerDeploymentsGet(req: operations.DeploymentmanagerDeploymentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsGetResponse>;
    /**
     * deploymentmanagerDeploymentsGetIamPolicy - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
    **/
    deploymentmanagerDeploymentsGetIamPolicy(req: operations.DeploymentmanagerDeploymentsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsGetIamPolicyResponse>;
    /**
     * deploymentmanagerDeploymentsInsert - Creates a deployment and all of the resources described by the deployment manifest.
    **/
    deploymentmanagerDeploymentsInsert(req: operations.DeploymentmanagerDeploymentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsInsertResponse>;
    /**
     * deploymentmanagerDeploymentsList - Lists all deployments for a given project.
    **/
    deploymentmanagerDeploymentsList(req: operations.DeploymentmanagerDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsListResponse>;
    /**
     * deploymentmanagerDeploymentsPatch - Patches a deployment and all of the resources described by the deployment manifest.
    **/
    deploymentmanagerDeploymentsPatch(req: operations.DeploymentmanagerDeploymentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsPatchResponse>;
    /**
     * deploymentmanagerDeploymentsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy.
    **/
    deploymentmanagerDeploymentsSetIamPolicy(req: operations.DeploymentmanagerDeploymentsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsSetIamPolicyResponse>;
    /**
     * deploymentmanagerDeploymentsStop - Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
    **/
    deploymentmanagerDeploymentsStop(req: operations.DeploymentmanagerDeploymentsStopRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsStopResponse>;
    /**
     * deploymentmanagerDeploymentsTestIamPermissions - Returns permissions that a caller has on the specified resource.
    **/
    deploymentmanagerDeploymentsTestIamPermissions(req: operations.DeploymentmanagerDeploymentsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsTestIamPermissionsResponse>;
    /**
     * deploymentmanagerDeploymentsUpdate - Updates a deployment and all of the resources described by the deployment manifest.
    **/
    deploymentmanagerDeploymentsUpdate(req: operations.DeploymentmanagerDeploymentsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerDeploymentsUpdateResponse>;
}
