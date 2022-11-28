import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * visionProjectsLocationsFilesAnnotate - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
    **/
    visionProjectsLocationsFilesAnnotate(req: operations.VisionProjectsLocationsFilesAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsFilesAnnotateResponse>;
    /**
     * visionProjectsLocationsFilesAsyncBatchAnnotate - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
    **/
    visionProjectsLocationsFilesAsyncBatchAnnotate(req: operations.VisionProjectsLocationsFilesAsyncBatchAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsFilesAsyncBatchAnnotateResponse>;
    /**
     * visionProjectsLocationsImagesAnnotate - Run image detection and annotation for a batch of images.
    **/
    visionProjectsLocationsImagesAnnotate(req: operations.VisionProjectsLocationsImagesAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsImagesAnnotateResponse>;
    /**
     * visionProjectsLocationsImagesAsyncBatchAnnotate - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
    **/
    visionProjectsLocationsImagesAsyncBatchAnnotate(req: operations.VisionProjectsLocationsImagesAsyncBatchAnnotateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsImagesAsyncBatchAnnotateResponse>;
    /**
     * visionProjectsLocationsProductSetsAddProduct - Adds a Product to the specified ProductSet. If the Product is already present, no change is made. One Product can be added to at most 100 ProductSets. Possible errors: * Returns NOT_FOUND if the Product or the ProductSet doesn't exist.
    **/
    visionProjectsLocationsProductSetsAddProduct(req: operations.VisionProjectsLocationsProductSetsAddProductRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsAddProductResponse>;
    /**
     * visionProjectsLocationsProductSetsCreate - Creates and returns a new ProductSet resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing, or is longer than 4096 characters.
    **/
    visionProjectsLocationsProductSetsCreate(req: operations.VisionProjectsLocationsProductSetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsCreateResponse>;
    /**
     * visionProjectsLocationsProductSetsDelete - Permanently deletes a ProductSet. Products and ReferenceImages in the ProductSet are not deleted. The actual image files are not deleted from Google Cloud Storage.
    **/
    visionProjectsLocationsProductSetsDelete(req: operations.VisionProjectsLocationsProductSetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsDeleteResponse>;
    /**
     * visionProjectsLocationsProductSetsImport - Asynchronous API that imports a list of reference images to specified product sets based on a list of image information. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress) `Operation.response` contains `ImportProductSetsResponse`. (results) The input source of this method is a csv file on Google Cloud Storage. For the format of the csv file please see ImportProductSetsGcsSource.csv_file_uri.
    **/
    visionProjectsLocationsProductSetsImport(req: operations.VisionProjectsLocationsProductSetsImportRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsImportResponse>;
    /**
     * visionProjectsLocationsProductSetsList - Lists ProductSets in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100, or less than 1.
    **/
    visionProjectsLocationsProductSetsList(req: operations.VisionProjectsLocationsProductSetsListRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsListResponse>;
    /**
     * visionProjectsLocationsProductSetsPatch - Makes changes to a ProductSet resource. Only display_name can be updated currently. Possible errors: * Returns NOT_FOUND if the ProductSet does not exist. * Returns INVALID_ARGUMENT if display_name is present in update_mask but missing from the request or longer than 4096 characters.
    **/
    visionProjectsLocationsProductSetsPatch(req: operations.VisionProjectsLocationsProductSetsPatchRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsPatchResponse>;
    /**
     * visionProjectsLocationsProductSetsProductsList - Lists the Products in a ProductSet, in an unspecified order. If the ProductSet does not exist, the products field of the response will be empty. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
    **/
    visionProjectsLocationsProductSetsProductsList(req: operations.VisionProjectsLocationsProductSetsProductsListRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsProductsListResponse>;
    /**
     * visionProjectsLocationsProductSetsRemoveProduct - Removes a Product from the specified ProductSet.
    **/
    visionProjectsLocationsProductSetsRemoveProduct(req: operations.VisionProjectsLocationsProductSetsRemoveProductRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductSetsRemoveProductResponse>;
    /**
     * visionProjectsLocationsProductsCreate - Creates and returns a new product resource. Possible errors: * Returns INVALID_ARGUMENT if display_name is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if description is longer than 4096 characters. * Returns INVALID_ARGUMENT if product_category is missing or invalid.
    **/
    visionProjectsLocationsProductsCreate(req: operations.VisionProjectsLocationsProductsCreateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductsCreateResponse>;
    /**
     * visionProjectsLocationsProductsList - Lists products in an unspecified order. Possible errors: * Returns INVALID_ARGUMENT if page_size is greater than 100 or less than 1.
    **/
    visionProjectsLocationsProductsList(req: operations.VisionProjectsLocationsProductsListRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductsListResponse>;
    /**
     * visionProjectsLocationsProductsPurge - Asynchronous API to delete all Products in a ProductSet or all Products that are in no ProductSet. If a Product is a member of the specified ProductSet in addition to other ProductSets, the Product will still be deleted. It is recommended to not delete the specified ProductSet until after this operation has completed. It is also recommended to not add any of the Products involved in the batch delete to a new ProductSet while this operation is running because those Products may still end up deleted. It's not possible to undo the PurgeProducts operation. Therefore, it is recommended to keep the csv files used in ImportProductSets (if that was how you originally built the Product Set) before starting PurgeProducts, in case you need to re-import the data after deletion. If the plan is to purge all of the Products from a ProductSet and then re-use the empty ProductSet to re-import new Products into the empty ProductSet, you must wait until the PurgeProducts operation has finished for that ProductSet. The google.longrunning.Operation API can be used to keep track of the progress and results of the request. `Operation.metadata` contains `BatchOperationMetadata`. (progress)
    **/
    visionProjectsLocationsProductsPurge(req: operations.VisionProjectsLocationsProductsPurgeRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductsPurgeResponse>;
    /**
     * visionProjectsLocationsProductsReferenceImagesCreate - Creates and returns a new ReferenceImage resource. The `bounding_poly` field is optional. If `bounding_poly` is not specified, the system will try to detect regions of interest in the image that are compatible with the product_category on the parent product. If it is specified, detection is ALWAYS skipped. The system converts polygons into non-rotated rectangles. Note that the pipeline will resize the image if the image resolution is too large to process (above 50MP). Possible errors: * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096 characters. * Returns INVALID_ARGUMENT if the product does not exist. * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing compatible with the parent product's product_category is detected. * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
    **/
    visionProjectsLocationsProductsReferenceImagesCreate(req: operations.VisionProjectsLocationsProductsReferenceImagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductsReferenceImagesCreateResponse>;
    /**
     * visionProjectsLocationsProductsReferenceImagesList - Lists reference images. Possible errors: * Returns NOT_FOUND if the parent product does not exist. * Returns INVALID_ARGUMENT if the page_size is greater than 100, or less than 1.
    **/
    visionProjectsLocationsProductsReferenceImagesList(req: operations.VisionProjectsLocationsProductsReferenceImagesListRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsLocationsProductsReferenceImagesListResponse>;
    /**
     * visionProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    visionProjectsOperationsGet(req: operations.VisionProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.VisionProjectsOperationsGetResponse>;
}
