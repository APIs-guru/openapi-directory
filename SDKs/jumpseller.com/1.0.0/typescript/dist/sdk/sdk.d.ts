import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.jumpseller.com/v1"];
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
     * deleteCategoriesIdJson - Delete an existing Category.
    **/
    deleteCategoriesIdJson(req: operations.DeleteCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCategoriesIdJsonResponse>;
    /**
     * deleteCheckoutCustomFieldsIdJson - Delete an existing CheckoutCustomField.
    **/
    deleteCheckoutCustomFieldsIdJson(req: operations.DeleteCheckoutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCheckoutCustomFieldsIdJsonResponse>;
    /**
     * deleteCustomFieldsIdJson - Delete an existing CustomField.
    **/
    deleteCustomFieldsIdJson(req: operations.DeleteCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomFieldsIdJsonResponse>;
    /**
     * deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson - Delete an existing CustomFieldSelectOption.
    **/
    deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req: operations.DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse>;
    /**
     * deleteCustomerCategoriesIdCustomersJson - Delete Customers from an existing CustomerCategory.
    **/
    deleteCustomerCategoriesIdCustomersJson(req: operations.DeleteCustomerCategoriesIdCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerCategoriesIdCustomersJsonResponse>;
    /**
     * deleteCustomerCategoriesIdJson - Delete an existing CustomerCategory.
    **/
    deleteCustomerCategoriesIdJson(req: operations.DeleteCustomerCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerCategoriesIdJsonResponse>;
    /**
     * deleteCustomersIdFieldsFieldId - Delete a Customer Additional Field.
    **/
    deleteCustomersIdFieldsFieldId(req: operations.DeleteCustomersIdFieldsFieldIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomersIdFieldsFieldIdResponse>;
    /**
     * deleteCustomersIdJson - Delete an existing Customer.
    **/
    deleteCustomersIdJson(req: operations.DeleteCustomersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomersIdJsonResponse>;
    /**
     * deleteHooksIdJson - Delete an existing Hook.
    **/
    deleteHooksIdJson(req: operations.DeleteHooksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHooksIdJsonResponse>;
    /**
     * deleteJsappsCodeJson - Delete an existing JSApp.
    **/
    deleteJsappsCodeJson(req: operations.DeleteJsappsCodeJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJsappsCodeJsonResponse>;
    /**
     * deletePagesIdJson - Delete an existing Page.
    **/
    deletePagesIdJson(req: operations.DeletePagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeletePagesIdJsonResponse>;
    /**
     * deleteProductsIdAttachmentsAttachmentIdJson - Delete a Product Attachment.
    **/
    deleteProductsIdAttachmentsAttachmentIdJson(req: operations.DeleteProductsIdAttachmentsAttachmentIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdAttachmentsAttachmentIdJsonResponse>;
    /**
     * deleteProductsIdDigitalProductsDigitalProductIdJson - Delete a Product DigitalProduct.
    **/
    deleteProductsIdDigitalProductsDigitalProductIdJson(req: operations.DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse>;
    /**
     * deleteProductsIdImagesImageIdJson - Delete a Product Image.
    **/
    deleteProductsIdImagesImageIdJson(req: operations.DeleteProductsIdImagesImageIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdImagesImageIdJsonResponse>;
    /**
     * deleteProductsIdJson - Delete an existing Product.
    **/
    deleteProductsIdJson(req: operations.DeleteProductsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdJsonResponse>;
    /**
     * deleteProductsIdOptionsOptionIdJson - Delete a Product Option.
    **/
    deleteProductsIdOptionsOptionIdJson(req: operations.DeleteProductsIdOptionsOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdOptionsOptionIdJsonResponse>;
    /**
     * deleteProductsIdOptionsOptionIdValuesValueIdJson - Delete a Product Option Value.
    **/
    deleteProductsIdOptionsOptionIdValuesValueIdJson(req: operations.DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse>;
    /**
     * deleteProductsProductIdFieldsFieldIdJson - Delete value of Product Custom Field
    **/
    deleteProductsProductIdFieldsFieldIdJson(req: operations.DeleteProductsProductIdFieldsFieldIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsProductIdFieldsFieldIdJsonResponse>;
    /**
     * deletePromotionsIdJson - Delete an existing Promotion.
    **/
    deletePromotionsIdJson(req: operations.DeletePromotionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeletePromotionsIdJsonResponse>;
    /**
     * deleteShippingMethodsIdJson - Delete an existing Shipping Method.
    **/
    deleteShippingMethodsIdJson(req: operations.DeleteShippingMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteShippingMethodsIdJsonResponse>;
    /**
     * getCategoriesCountJson - Count all Categories.
    **/
    getCategoriesCountJson(req: operations.GetCategoriesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesCountJsonResponse>;
    /**
     * getCategoriesIdJson - Retrieve a single Category.
    **/
    getCategoriesIdJson(req: operations.GetCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesIdJsonResponse>;
    /**
     * getCategoriesJson - Retrieve all Categories.
    **/
    getCategoriesJson(req: operations.GetCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesJsonResponse>;
    /**
     * getCheckoutCustomFieldsIdJson - Retrieve a single CheckoutCustomField.
    **/
    getCheckoutCustomFieldsIdJson(req: operations.GetCheckoutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckoutCustomFieldsIdJsonResponse>;
    /**
     * getCheckoutCustomFieldsJson - Retrieve all Checkout Custom Fields.
    **/
    getCheckoutCustomFieldsJson(req: operations.GetCheckoutCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckoutCustomFieldsJsonResponse>;
    /**
     * getCountriesCountryCodeJson - Retrieve a single Country information.
    **/
    getCountriesCountryCodeJson(req: operations.GetCountriesCountryCodeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesCountryCodeJsonResponse>;
    /**
     * getCountriesCountryCodeRegionsJson - Retrieve all Regions from a single Country.
    **/
    getCountriesCountryCodeRegionsJson(req: operations.GetCountriesCountryCodeRegionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesCountryCodeRegionsJsonResponse>;
    /**
     * getCountriesCountryCodeRegionsRegionCodeJson - Retrieve a single Region information object.
    **/
    getCountriesCountryCodeRegionsRegionCodeJson(req: operations.GetCountriesCountryCodeRegionsRegionCodeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesCountryCodeRegionsRegionCodeJsonResponse>;
    /**
     * getCountriesJson - Retrieve all Countries.
    **/
    getCountriesJson(req: operations.GetCountriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesJsonResponse>;
    /**
     * getCustomFieldsIdJson - Retrieve a single CustomField.
    **/
    getCustomFieldsIdJson(req: operations.GetCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsIdJsonResponse>;
    /**
     * getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson - Retrieve a single SelectOption from a CustomField.
    **/
    getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req: operations.GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse>;
    /**
     * getCustomFieldsIdSelectOptionsJson - Retrieve all Store's Custom Fields.
    **/
    getCustomFieldsIdSelectOptionsJson(req: operations.GetCustomFieldsIdSelectOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsIdSelectOptionsJsonResponse>;
    /**
     * getCustomFieldsJson - Retrieve all Store's Custom Fields.
    **/
    getCustomFieldsJson(req: operations.GetCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsJsonResponse>;
    /**
     * getCustomerCategoriesIdCustomersJson - Retrieves the customers in a CustomerCategory.
    **/
    getCustomerCategoriesIdCustomersJson(req: operations.GetCustomerCategoriesIdCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerCategoriesIdCustomersJsonResponse>;
    /**
     * getCustomerCategoriesIdJson - Retrieve a single CustomerCategory.
    **/
    getCustomerCategoriesIdJson(req: operations.GetCustomerCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerCategoriesIdJsonResponse>;
    /**
     * getCustomerCategoriesJson - Retrieve all Customer Categories.
    **/
    getCustomerCategoriesJson(req: operations.GetCustomerCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerCategoriesJsonResponse>;
    /**
     * getCustomersCountJson - Count all Customers.
    **/
    getCustomersCountJson(req: operations.GetCustomersCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersCountJsonResponse>;
    /**
     * getCustomersEmailEmailJson - Retrieve a single Customer by email.
    **/
    getCustomersEmailEmailJson(req: operations.GetCustomersEmailEmailJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersEmailEmailJsonResponse>;
    /**
     * getCustomersIdFields - Retrieves the Customer Additional Field of a Customer.
    **/
    getCustomersIdFields(req: operations.GetCustomersIdFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersIdFieldsResponse>;
    /**
     * getCustomersIdFieldsFieldId - Retrieve a single Customer Additional Field.
    **/
    getCustomersIdFieldsFieldId(req: operations.GetCustomersIdFieldsFieldIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersIdFieldsFieldIdResponse>;
    /**
     * getCustomersIdJson - Retrieve a single Customer by id.
    **/
    getCustomersIdJson(req: operations.GetCustomersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersIdJsonResponse>;
    /**
     * getCustomersJson - Retrieve all Customers.
    **/
    getCustomersJson(req: operations.GetCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersJsonResponse>;
    /**
     * getFulfillmentsCountJson - Count all Fulfillments.
    **/
    getFulfillmentsCountJson(req: operations.GetFulfillmentsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentsCountJsonResponse>;
    /**
     * getFulfillmentsIdJson - Retrieve a single Fulfillment.
    **/
    getFulfillmentsIdJson(req: operations.GetFulfillmentsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentsIdJsonResponse>;
    /**
     * getFulfillmentsJson - Retrieve all Fulfillments.
    **/
    getFulfillmentsJson(req: operations.GetFulfillmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetFulfillmentsJsonResponse>;
    /**
     * getHooksIdJson - Retrieve a single Hook.
    **/
    getHooksIdJson(req: operations.GetHooksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetHooksIdJsonResponse>;
    /**
     * getHooksJson - Retrieve all Hooks.
    **/
    getHooksJson(req: operations.GetHooksJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetHooksJsonResponse>;
    /**
     * getJsappsCodeJson - Retrieve a JSApp.
    **/
    getJsappsCodeJson(req: operations.GetJsappsCodeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetJsappsCodeJsonResponse>;
    /**
     * getJsappsJson - Retrieve all the Store's JSApps.
    **/
    getJsappsJson(req: operations.GetJsappsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetJsappsJsonResponse>;
    /**
     * getOrderIdFulfillmentsJson - Retrieve the Fulfillments associated with the Order.
    **/
    getOrderIdFulfillmentsJson(req: operations.GetOrderIdFulfillmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderIdFulfillmentsJsonResponse>;
    /**
     * getOrdersAfterIdJson - Retrieve orders filtered by Order Id.
     *
     * For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.
    **/
    getOrdersAfterIdJson(req: operations.GetOrdersAfterIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersAfterIdJsonResponse>;
    /**
     * getOrdersCountJson - Count all Orders.
    **/
    getOrdersCountJson(req: operations.GetOrdersCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersCountJsonResponse>;
    /**
     * getOrdersIdHistoryJson - Retrieve all Order History.
    **/
    getOrdersIdHistoryJson(req: operations.GetOrdersIdHistoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersIdHistoryJsonResponse>;
    /**
     * getOrdersIdJson - Retrieve a single Order.
    **/
    getOrdersIdJson(req: operations.GetOrdersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersIdJsonResponse>;
    /**
     * getOrdersJson - Retrieve all Orders.
    **/
    getOrdersJson(req: operations.GetOrdersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersJsonResponse>;
    /**
     * getOrdersStatusStatusJson - Retrieve orders filtered by status.
    **/
    getOrdersStatusStatusJson(req: operations.GetOrdersStatusStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersStatusStatusJsonResponse>;
    /**
     * getPagesCountJson - Count all Pages.
    **/
    getPagesCountJson(req: operations.GetPagesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPagesCountJsonResponse>;
    /**
     * getPagesIdJson - Retrieve a single Page by id.
    **/
    getPagesIdJson(req: operations.GetPagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPagesIdJsonResponse>;
    /**
     * getPagesJson - Retrieve all Pages.
    **/
    getPagesJson(req: operations.GetPagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPagesJsonResponse>;
    /**
     * getPartnersStoresJson - Retrieve statistics.
    **/
    getPartnersStoresJson(req: operations.GetPartnersStoresJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPartnersStoresJsonResponse>;
    /**
     * getPaymentMethodsIdJson - Retrieve a single Payment Method.
    **/
    getPaymentMethodsIdJson(req: operations.GetPaymentMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsIdJsonResponse>;
    /**
     * getPaymentMethodsJson - Retrieve all Store's Payment Methods.
    **/
    getPaymentMethodsJson(req: operations.GetPaymentMethodsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsJsonResponse>;
    /**
     * getProductsAfterIdJson - Retrieves Products after the given id.
    **/
    getProductsAfterIdJson(req: operations.GetProductsAfterIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsAfterIdJsonResponse>;
    /**
     * getProductsCategoryCategoryIdCountJson - Count Products filtered by category.
    **/
    getProductsCategoryCategoryIdCountJson(req: operations.GetProductsCategoryCategoryIdCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsCategoryCategoryIdCountJsonResponse>;
    /**
     * getProductsCategoryCategoryIdJson - Retrieve Products filtered by category.
    **/
    getProductsCategoryCategoryIdJson(req: operations.GetProductsCategoryCategoryIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsCategoryCategoryIdJsonResponse>;
    /**
     * getProductsCountJson - Count all Products.
    **/
    getProductsCountJson(req: operations.GetProductsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsCountJsonResponse>;
    /**
     * getProductsIdAttachmentsAttachmentIdJson - Retrieve a single Product Attachment.
    **/
    getProductsIdAttachmentsAttachmentIdJson(req: operations.GetProductsIdAttachmentsAttachmentIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdAttachmentsAttachmentIdJsonResponse>;
    /**
     * getProductsIdAttachmentsCountJson - Count all Product Attachments.
    **/
    getProductsIdAttachmentsCountJson(req: operations.GetProductsIdAttachmentsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdAttachmentsCountJsonResponse>;
    /**
     * getProductsIdAttachmentsJson - Retrieve all Product Attachments.
    **/
    getProductsIdAttachmentsJson(req: operations.GetProductsIdAttachmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdAttachmentsJsonResponse>;
    /**
     * getProductsIdDigitalProductsCountJson - Count all Product DigitalProducts.
    **/
    getProductsIdDigitalProductsCountJson(req: operations.GetProductsIdDigitalProductsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdDigitalProductsCountJsonResponse>;
    /**
     * getProductsIdDigitalProductsDigitalProductIdJson - Retrieve a single Product DigitalProduct.
    **/
    getProductsIdDigitalProductsDigitalProductIdJson(req: operations.GetProductsIdDigitalProductsDigitalProductIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdDigitalProductsDigitalProductIdJsonResponse>;
    /**
     * getProductsIdDigitalProductsJson - Retrieve all Product DigitalProducts.
    **/
    getProductsIdDigitalProductsJson(req: operations.GetProductsIdDigitalProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdDigitalProductsJsonResponse>;
    /**
     * getProductsIdFieldsCountJson - Count all Product Custom Fields.
    **/
    getProductsIdFieldsCountJson(req: operations.GetProductsIdFieldsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdFieldsCountJsonResponse>;
    /**
     * getProductsIdFieldsJson - Retrieve all Product Custom Fields
    **/
    getProductsIdFieldsJson(req: operations.GetProductsIdFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdFieldsJsonResponse>;
    /**
     * getProductsIdImagesCountJson - Count all Product Images.
    **/
    getProductsIdImagesCountJson(req: operations.GetProductsIdImagesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdImagesCountJsonResponse>;
    /**
     * getProductsIdImagesImageIdJson - Retrieve a single Product Image.
    **/
    getProductsIdImagesImageIdJson(req: operations.GetProductsIdImagesImageIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdImagesImageIdJsonResponse>;
    /**
     * getProductsIdImagesJson - Retrieve all Product Images.
    **/
    getProductsIdImagesJson(req: operations.GetProductsIdImagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdImagesJsonResponse>;
    /**
     * getProductsIdJson - Retrieve a single Product.
    **/
    getProductsIdJson(req: operations.GetProductsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdJsonResponse>;
    /**
     * getProductsIdOptionsCountJson - Count all Product Options.
    **/
    getProductsIdOptionsCountJson(req: operations.GetProductsIdOptionsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsCountJsonResponse>;
    /**
     * getProductsIdOptionsJson - Retrieve all Product Options.
    **/
    getProductsIdOptionsJson(req: operations.GetProductsIdOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsJsonResponse>;
    /**
     * getProductsIdOptionsOptionIdJson - Retrieve a single Product Option.
    **/
    getProductsIdOptionsOptionIdJson(req: operations.GetProductsIdOptionsOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdJsonResponse>;
    /**
     * getProductsIdOptionsOptionIdValuesCountJson - Count all Product Option Values.
    **/
    getProductsIdOptionsOptionIdValuesCountJson(req: operations.GetProductsIdOptionsOptionIdValuesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdValuesCountJsonResponse>;
    /**
     * getProductsIdOptionsOptionIdValuesJson - Retrieve all Product Option Values.
    **/
    getProductsIdOptionsOptionIdValuesJson(req: operations.GetProductsIdOptionsOptionIdValuesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdValuesJsonResponse>;
    /**
     * getProductsIdOptionsOptionIdValuesValueIdJson - Retrieve a single Product Option Value.
    **/
    getProductsIdOptionsOptionIdValuesValueIdJson(req: operations.GetProductsIdOptionsOptionIdValuesValueIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdValuesValueIdJsonResponse>;
    /**
     * getProductsIdVariantsCountJson - Count all Product Variants.
    **/
    getProductsIdVariantsCountJson(req: operations.GetProductsIdVariantsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdVariantsCountJsonResponse>;
    /**
     * getProductsIdVariantsJson - Retrieve all Product Variants.
    **/
    getProductsIdVariantsJson(req: operations.GetProductsIdVariantsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdVariantsJsonResponse>;
    /**
     * getProductsIdVariantsVariantIdJson - Retrieve a single Product Variant.
    **/
    getProductsIdVariantsVariantIdJson(req: operations.GetProductsIdVariantsVariantIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdVariantsVariantIdJsonResponse>;
    /**
     * getProductsJson - Retrieve all Products.
    **/
    getProductsJson(req: operations.GetProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsJsonResponse>;
    /**
     * getProductsSearchJson - Retrieve a Product List from a query.
     *
     * Endpoint example:
     *
     * ```text
     * https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description
     * ```
    **/
    getProductsSearchJson(req: operations.GetProductsSearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsSearchJsonResponse>;
    /**
     * getProductsStatusStatusCountJson - Count Products filtered by status.
    **/
    getProductsStatusStatusCountJson(req: operations.GetProductsStatusStatusCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsStatusStatusCountJsonResponse>;
    /**
     * getProductsStatusStatusJson - Retrieve Products filtered by status.
    **/
    getProductsStatusStatusJson(req: operations.GetProductsStatusStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsStatusStatusJsonResponse>;
    /**
     * getPromotionsIdJson - Retrieve a single Promotion.
    **/
    getPromotionsIdJson(req: operations.GetPromotionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPromotionsIdJsonResponse>;
    /**
     * getPromotionsJson - Retrieve all Promotions.
    **/
    getPromotionsJson(req: operations.GetPromotionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPromotionsJsonResponse>;
    /**
     * getShippingMethodsIdJson - Retrieve a single Shipping Method.
    **/
    getShippingMethodsIdJson(req: operations.GetShippingMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetShippingMethodsIdJsonResponse>;
    /**
     * getShippingMethodsJson - Retrieve all Store's Shipping Methods.
    **/
    getShippingMethodsJson(req: operations.GetShippingMethodsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetShippingMethodsJsonResponse>;
    /**
     * getStoreCheckStatusJson - Retrive store creation status.
    **/
    getStoreCheckStatusJson(req: operations.GetStoreCheckStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreCheckStatusJsonResponse>;
    /**
     * getStoreInfoJson - Retrieve Store Information.
    **/
    getStoreInfoJson(req: operations.GetStoreInfoJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreInfoJsonResponse>;
    /**
     * getStoreLanguagesJson - Retrieve Store Languages.
    **/
    getStoreLanguagesJson(req: operations.GetStoreLanguagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetStoreLanguagesJsonResponse>;
    /**
     * getTaxesIdJson - Retrieve a single Tax information.
    **/
    getTaxesIdJson(req: operations.GetTaxesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxesIdJsonResponse>;
    /**
     * getTaxesJson - Retrieve all Taxes.
    **/
    getTaxesJson(req: operations.GetTaxesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxesJsonResponse>;
    /**
     * postCategoriesJson - Create a new Category.
     *
     * Category's permalink is automatically generated from the given category's name.
    **/
    postCategoriesJson(req: operations.PostCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesJsonResponse>;
    /**
     * postCheckoutCustomFieldsJson - Create a new CheckoutCustomField.
     *
     * Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.
    **/
    postCheckoutCustomFieldsJson(req: operations.PostCheckoutCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCheckoutCustomFieldsJsonResponse>;
    /**
     * postCustomFieldsIdSelectOptionsJson - Create a new Custom Field Select Option.
    **/
    postCustomFieldsIdSelectOptionsJson(req: operations.PostCustomFieldsIdSelectOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomFieldsIdSelectOptionsJsonResponse>;
    /**
     * postCustomFieldsJson - Create a new Custom Field.
    **/
    postCustomFieldsJson(req: operations.PostCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomFieldsJsonResponse>;
    /**
     * postCustomerCategoriesIdCustomersJson - Adds Customers to a CustomerCategory.
    **/
    postCustomerCategoriesIdCustomersJson(req: operations.PostCustomerCategoriesIdCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomerCategoriesIdCustomersJsonResponse>;
    /**
     * postCustomerCategoriesJson - Create a new CustomerCategory.
    **/
    postCustomerCategoriesJson(req: operations.PostCustomerCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomerCategoriesJsonResponse>;
    /**
     * postCustomersIdFields - Adds Customer Additional Fields to a Customer.
    **/
    postCustomersIdFields(req: operations.PostCustomersIdFieldsRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomersIdFieldsResponse>;
    /**
     * postCustomersJson - Create a new Customer.
    **/
    postCustomersJson(req: operations.PostCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomersJsonResponse>;
    /**
     * postHooksJson - Create a new Hook.
    **/
    postHooksJson(req: operations.PostHooksJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostHooksJsonResponse>;
    /**
     * postJsappsJson - Create a Store JSApp.
    **/
    postJsappsJson(req: operations.PostJsappsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostJsappsJsonResponse>;
    /**
     * postOrdersIdHistoryJson - Create a new Order History Entry.
    **/
    postOrdersIdHistoryJson(req: operations.PostOrdersIdHistoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostOrdersIdHistoryJsonResponse>;
    /**
     * postOrdersJson - Create a new Order.
     *
     * Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).
    **/
    postOrdersJson(req: operations.PostOrdersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostOrdersJsonResponse>;
    /**
     * postPagesJson - Create a new Page.
    **/
    postPagesJson(req: operations.PostPagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostPagesJsonResponse>;
    /**
     * postProductsIdAttachmentsJson - Create a new Product Attachment.
    **/
    postProductsIdAttachmentsJson(req: operations.PostProductsIdAttachmentsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdAttachmentsJsonResponse>;
    /**
     * postProductsIdDigitalProductsJson - Create a new Product DigitalProduct.
    **/
    postProductsIdDigitalProductsJson(req: operations.PostProductsIdDigitalProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdDigitalProductsJsonResponse>;
    /**
     * postProductsIdFieldsJson - Add an existing Custom Field to a Product.
    **/
    postProductsIdFieldsJson(req: operations.PostProductsIdFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdFieldsJsonResponse>;
    /**
     * postProductsIdImagesJson - Create a new Product Image.
    **/
    postProductsIdImagesJson(req: operations.PostProductsIdImagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdImagesJsonResponse>;
    /**
     * postProductsIdOptionsJson - Create a new Product Option.
    **/
    postProductsIdOptionsJson(req: operations.PostProductsIdOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdOptionsJsonResponse>;
    /**
     * postProductsIdOptionsOptionIdValuesJson - Create a new Product Option Value.
    **/
    postProductsIdOptionsOptionIdValuesJson(req: operations.PostProductsIdOptionsOptionIdValuesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdOptionsOptionIdValuesJsonResponse>;
    /**
     * postProductsIdVariantsJson - Create a new Product Variant.
    **/
    postProductsIdVariantsJson(req: operations.PostProductsIdVariantsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdVariantsJsonResponse>;
    /**
     * postProductsJson - Create a new Product.
    **/
    postProductsJson(req: operations.PostProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsJsonResponse>;
    /**
     * postPromotionsJson - Create a new Promotion.
    **/
    postPromotionsJson(req: operations.PostPromotionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostPromotionsJsonResponse>;
    /**
     * postShippingMethodsJson - Creates a Shipping Method.
    **/
    postShippingMethodsJson(req: operations.PostShippingMethodsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostShippingMethodsJsonResponse>;
    /**
     * postStoreCreateJson - Create a Partnered Store
    **/
    postStoreCreateJson(req: operations.PostStoreCreateJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostStoreCreateJsonResponse>;
    /**
     * postTaxesJson - Create a new Tax.
    **/
    postTaxesJson(req: operations.PostTaxesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTaxesJsonResponse>;
    /**
     * putCategoriesIdJson - Modify an existing Category.
    **/
    putCategoriesIdJson(req: operations.PutCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCategoriesIdJsonResponse>;
    /**
     * putCheckoutCustomFieldsIdJson - Update a CheckoutCustomField.
    **/
    putCheckoutCustomFieldsIdJson(req: operations.PutCheckoutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCheckoutCustomFieldsIdJsonResponse>;
    /**
     * putCustomFieldsIdJson - Update a CustomField.
    **/
    putCustomFieldsIdJson(req: operations.PutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomFieldsIdJsonResponse>;
    /**
     * putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson - Update a SelectOption from a CustomField.
    **/
    putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req: operations.PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse>;
    /**
     * putCustomerCategoriesIdJson - Update a CustomerCategory.
    **/
    putCustomerCategoriesIdJson(req: operations.PutCustomerCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomerCategoriesIdJsonResponse>;
    /**
     * putCustomersIdFieldsFieldId - Update a Customer Additional Field.
    **/
    putCustomersIdFieldsFieldId(req: operations.PutCustomersIdFieldsFieldIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomersIdFieldsFieldIdResponse>;
    /**
     * putCustomersIdJson - Update a new Customer.
    **/
    putCustomersIdJson(req: operations.PutCustomersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomersIdJsonResponse>;
    /**
     * putHooksIdJson - Update a Hook.
    **/
    putHooksIdJson(req: operations.PutHooksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutHooksIdJsonResponse>;
    /**
     * putOrdersIdJson - Modify an existing Order.
     *
     * Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.
    **/
    putOrdersIdJson(req: operations.PutOrdersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutOrdersIdJsonResponse>;
    /**
     * putPagesIdJson - Update a Page.
    **/
    putPagesIdJson(req: operations.PutPagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutPagesIdJsonResponse>;
    /**
     * putProductsIdJson - Modify an existing Product.
    **/
    putProductsIdJson(req: operations.PutProductsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdJsonResponse>;
    /**
     * putProductsIdOptionsOptionIdJson - Modify an existing Product Option.
    **/
    putProductsIdOptionsOptionIdJson(req: operations.PutProductsIdOptionsOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdOptionsOptionIdJsonResponse>;
    /**
     * putProductsIdOptionsOptionIdValuesValueIdJson - Modify an existing Product Option Value.
    **/
    putProductsIdOptionsOptionIdValuesValueIdJson(req: operations.PutProductsIdOptionsOptionIdValuesValueIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdOptionsOptionIdValuesValueIdJsonResponse>;
    /**
     * putProductsIdVariantsVariantIdJson - Modify an existing Product Variant.
    **/
    putProductsIdVariantsVariantIdJson(req: operations.PutProductsIdVariantsVariantIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdVariantsVariantIdJsonResponse>;
    /**
     * putProductsProductIdFieldsFieldIdJson - Update value of Product Custom Field
    **/
    putProductsProductIdFieldsFieldIdJson(req: operations.PutProductsProductIdFieldsFieldIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsProductIdFieldsFieldIdJsonResponse>;
    /**
     * putPromotionsIdJson - Update a Promotion.
    **/
    putPromotionsIdJson(req: operations.PutPromotionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutPromotionsIdJsonResponse>;
    /**
     * putShippingMethodsIdJson - Update a Shipping Method.
    **/
    putShippingMethodsIdJson(req: operations.PutShippingMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutShippingMethodsIdJsonResponse>;
}
export {};
