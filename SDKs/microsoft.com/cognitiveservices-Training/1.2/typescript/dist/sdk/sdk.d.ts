import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v1.2/Training"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createImagesFromData - Add the provided images to the set of training images
     *
     * This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
     * multiple image files can be sent at once, with a maximum of 64 files
    **/
    createImagesFromData(req: operations.CreateImagesFromDataRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagesFromDataResponse>;
    /**
     * createProject - Create a project
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * createTag - Create a tag for the project
    **/
    createTag(req: operations.CreateTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagResponse>;
    /**
     * deleteImageTags - Remove a set of tags from a set of images
    **/
    deleteImageTags(req: operations.DeleteImageTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageTagsResponse>;
    /**
     * deleteImages - Delete images from the set of training images
    **/
    deleteImages(req: operations.DeleteImagesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesResponse>;
    /**
     * deleteIteration - Delete a specific iteration of a project
    **/
    deleteIteration(req: operations.DeleteIterationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIterationResponse>;
    /**
     * deletePrediction - Delete a set of predicted images and their associated prediction results
    **/
    deletePrediction(req: operations.DeletePredictionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePredictionResponse>;
    /**
     * deleteProject - Delete a specific project
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * deleteTag - Delete a tag from the project
    **/
    deleteTag(req: operations.DeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagResponse>;
    /**
     * exportIteration - Export a trained iteration
    **/
    exportIteration(req: operations.ExportIterationRequest, config?: AxiosRequestConfig): Promise<operations.ExportIterationResponse>;
    /**
     * getAccountInfo - Get basic information about your account
    **/
    getAccountInfo(req: operations.GetAccountInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountInfoResponse>;
    /**
     * getDomain - Get information about a specific domain
    **/
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * getDomains - Get a list of the available domains
    **/
    getDomains(req: operations.GetDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsResponse>;
    /**
     * getExports - Get the list of exports for a specific iteration
    **/
    getExports(req: operations.GetExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsResponse>;
    /**
     * getIteration - Get a specific iteration
    **/
    getIteration(req: operations.GetIterationRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationResponse>;
    /**
     * getIterationPerformance - Get detailed performance information about a trained iteration
    **/
    getIterationPerformance(req: operations.GetIterationPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationPerformanceResponse>;
    /**
     * getIterations - Get iterations for the project
    **/
    getIterations(req: operations.GetIterationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationsResponse>;
    /**
     * getProject - Get a specific project
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getProjects - Get your projects
    **/
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * getTag - Get information about a specific tag
    **/
    getTag(req: operations.GetTagRequest, config?: AxiosRequestConfig): Promise<operations.GetTagResponse>;
    /**
     * getTaggedImages - Get tagged images for a given project iteration
     *
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
    **/
    getTaggedImages(req: operations.GetTaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetTaggedImagesResponse>;
    /**
     * getTags - Get the tags for a given project and iteration
    **/
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * getUntaggedImages - Get untagged images for a given project iteration
     *
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
    **/
    getUntaggedImages(req: operations.GetUntaggedImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetUntaggedImagesResponse>;
    /**
     * quickTestImage - Quick test an image
    **/
    quickTestImage(req: operations.QuickTestImageRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageResponse>;
    /**
     * quickTestImageUrl - Quick test an image url
    **/
    quickTestImageUrl(req: operations.QuickTestImageUrlRequest, config?: AxiosRequestConfig): Promise<operations.QuickTestImageUrlResponse>;
    /**
     * trainProject - Queues project for training
    **/
    trainProject(req: operations.TrainProjectRequest, config?: AxiosRequestConfig): Promise<operations.TrainProjectResponse>;
    /**
     * updateIteration - Update a specific iteration
    **/
    updateIteration(req: operations.UpdateIterationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationResponse>;
    /**
     * updateProject - Update a specific project
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
    /**
     * updateTag - Update a tag
    **/
    updateTag(req: operations.UpdateTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTagResponse>;
}
export {};
