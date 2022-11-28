import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCrmV3ExtensionsCardsAppIdCardIdArchive - Delete a card
     *
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
    **/
    deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req: operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse>;
    /**
     * getCrmV3ExtensionsCardsAppIdCardIdGetById - Get a card.
     *
     * Returns the definition for a card with the given ID.
    **/
    getCrmV3ExtensionsCardsAppIdCardIdGetById(req: operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse>;
    /**
     * getCrmV3ExtensionsCardsAppIdGetAll - Get all cards
     *
     * Returns a list of cards for a given app.
    **/
    getCrmV3ExtensionsCardsAppIdGetAll(req: operations.GetCrmV3ExtensionsCardsAppIdGetAllRequest, config?: AxiosRequestConfig): Promise<operations.GetCrmV3ExtensionsCardsAppIdGetAllResponse>;
    /**
     * patchCrmV3ExtensionsCardsAppIdCardIdUpdate - Update a card
     *
     * Update a card definition with new details.
    **/
    patchCrmV3ExtensionsCardsAppIdCardIdUpdate(req: operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse>;
    /**
     * postCrmV3ExtensionsCardsAppIdCreate - Create a new card
     *
     * Defines a new card that will become active on an account when this app is installed.
    **/
    postCrmV3ExtensionsCardsAppIdCreate(req: operations.PostCrmV3ExtensionsCardsAppIdCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostCrmV3ExtensionsCardsAppIdCreateResponse>;
}
