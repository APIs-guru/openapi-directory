import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Volumes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteVolumesId - Delete a Volume
     *
     * Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.
    **/
    deleteVolumesId(req: operations.DeleteVolumesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumesIdResponse>;
    /**
     * getVolumes - Get all Volumes
     *
     * Gets all existing Volumes that you have available.
    **/
    getVolumes(req: operations.GetVolumesRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesResponse>;
    /**
     * getVolumesId - Get a Volume
     *
     * Gets a specific Volume object.
    **/
    getVolumesId(req: operations.GetVolumesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesIdResponse>;
    /**
     * postVolumes - Create a Volume
     *
     * Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.
     *
     * Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.
     *
     * The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).
     *
     * A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.
     *
     * #### Call specific error codes
     *
     * | Code                                | Description                                         |
     * |-------------------------------------|-----------------------------------------------------|
     * | `no_space_left_in_location`         | There is no volume space left in the given location |
     *
    **/
    postVolumes(req: operations.PostVolumesRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesResponse>;
    /**
     * putVolumesId - Update a Volume
     *
     * Updates the Volume properties.
     *
     * Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
    **/
    putVolumesId(req: operations.PutVolumesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutVolumesIdResponse>;
}
