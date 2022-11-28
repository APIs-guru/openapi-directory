import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlacementGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePlacementGroupsId - Delete a PlacementGroup
     *
     * Deletes a PlacementGroup.
    **/
    deletePlacementGroupsId(req: operations.DeletePlacementGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePlacementGroupsIdResponse>;
    /**
     * getPlacementGroups - Get all PlacementGroups
     *
     * Returns all PlacementGroup objects.
    **/
    getPlacementGroups(req: operations.GetPlacementGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlacementGroupsResponse>;
    /**
     * getPlacementGroupsId - Get a PlacementGroup
     *
     * Gets a specific PlacementGroup object.
    **/
    getPlacementGroupsId(req: operations.GetPlacementGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlacementGroupsIdResponse>;
    /**
     * postPlacementGroups - Create a PlacementGroup
     *
     * Creates a new PlacementGroup.
     *
    **/
    postPlacementGroups(req: operations.PostPlacementGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostPlacementGroupsResponse>;
    /**
     * putPlacementGroupsId - Update a PlacementGroup
     *
     * Updates the PlacementGroup properties.
     *
     * Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
     *
    **/
    putPlacementGroupsId(req: operations.PutPlacementGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutPlacementGroupsIdResponse>;
}
