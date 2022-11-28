# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteCategoriesIdJsonRequest, DeleteCategoriesIdJsonResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteCategoriesIdJsonRequest = {
  pathParams: {
    id: 695806098633969240,
  },
  queryParams: {
    authtoken: "modi",
    login: "atque",
  },
};

sdk.sdk.deleteCategoriesIdJson(req).then((res: DeleteCategoriesIdJsonResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteCategoriesIdJson` - Delete an existing Category.
* `deleteCheckoutCustomFieldsIdJson` - Delete an existing CheckoutCustomField.
* `deleteCustomFieldsIdJson` - Delete an existing CustomField.
* `deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson` - Delete an existing CustomFieldSelectOption.
* `deleteCustomerCategoriesIdCustomersJson` - Delete Customers from an existing CustomerCategory.
* `deleteCustomerCategoriesIdJson` - Delete an existing CustomerCategory.
* `deleteCustomersIdFieldsFieldId` - Delete a Customer Additional Field.
* `deleteCustomersIdJson` - Delete an existing Customer.
* `deleteHooksIdJson` - Delete an existing Hook.
* `deleteJsappsCodeJson` - Delete an existing JSApp.
* `deletePagesIdJson` - Delete an existing Page.
* `deleteProductsIdAttachmentsAttachmentIdJson` - Delete a Product Attachment.
* `deleteProductsIdDigitalProductsDigitalProductIdJson` - Delete a Product DigitalProduct.
* `deleteProductsIdImagesImageIdJson` - Delete a Product Image.
* `deleteProductsIdJson` - Delete an existing Product.
* `deleteProductsIdOptionsOptionIdJson` - Delete a Product Option.
* `deleteProductsIdOptionsOptionIdValuesValueIdJson` - Delete a Product Option Value.
* `deleteProductsProductIdFieldsFieldIdJson` - Delete value of Product Custom Field
* `deletePromotionsIdJson` - Delete an existing Promotion.
* `deleteShippingMethodsIdJson` - Delete an existing Shipping Method.
* `getCategoriesCountJson` - Count all Categories.
* `getCategoriesIdJson` - Retrieve a single Category.
* `getCategoriesJson` - Retrieve all Categories.
* `getCheckoutCustomFieldsIdJson` - Retrieve a single CheckoutCustomField.
* `getCheckoutCustomFieldsJson` - Retrieve all Checkout Custom Fields.
* `getCountriesCountryCodeJson` - Retrieve a single Country information.
* `getCountriesCountryCodeRegionsJson` - Retrieve all Regions from a single Country.
* `getCountriesCountryCodeRegionsRegionCodeJson` - Retrieve a single Region information object.
* `getCountriesJson` - Retrieve all Countries.
* `getCustomFieldsIdJson` - Retrieve a single CustomField.
* `getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson` - Retrieve a single SelectOption from a CustomField.
* `getCustomFieldsIdSelectOptionsJson` - Retrieve all Store's Custom Fields.
* `getCustomFieldsJson` - Retrieve all Store's Custom Fields.
* `getCustomerCategoriesIdCustomersJson` - Retrieves the customers in a CustomerCategory.
* `getCustomerCategoriesIdJson` - Retrieve a single CustomerCategory.
* `getCustomerCategoriesJson` - Retrieve all Customer Categories.
* `getCustomersCountJson` - Count all Customers.
* `getCustomersEmailEmailJson` - Retrieve a single Customer by email.
* `getCustomersIdFields` - Retrieves the Customer Additional Field of a Customer.
* `getCustomersIdFieldsFieldId` - Retrieve a single Customer Additional Field.
* `getCustomersIdJson` - Retrieve a single Customer by id.
* `getCustomersJson` - Retrieve all Customers.
* `getFulfillmentsCountJson` - Count all Fulfillments.
* `getFulfillmentsIdJson` - Retrieve a single Fulfillment.
* `getFulfillmentsJson` - Retrieve all Fulfillments.
* `getHooksIdJson` - Retrieve a single Hook.
* `getHooksJson` - Retrieve all Hooks.
* `getJsappsCodeJson` - Retrieve a JSApp.
* `getJsappsJson` - Retrieve all the Store's JSApps.
* `getOrderIdFulfillmentsJson` - Retrieve the Fulfillments associated with the Order.
* `getOrdersAfterIdJson` - Retrieve orders filtered by Order Id.
* `getOrdersCountJson` - Count all Orders.
* `getOrdersIdHistoryJson` - Retrieve all Order History.
* `getOrdersIdJson` - Retrieve a single Order.
* `getOrdersJson` - Retrieve all Orders.
* `getOrdersStatusStatusJson` - Retrieve orders filtered by status.
* `getPagesCountJson` - Count all Pages.
* `getPagesIdJson` - Retrieve a single Page by id.
* `getPagesJson` - Retrieve all Pages.
* `getPartnersStoresJson` - Retrieve statistics.
* `getPaymentMethodsIdJson` - Retrieve a single Payment Method.
* `getPaymentMethodsJson` - Retrieve all Store's Payment Methods.
* `getProductsAfterIdJson` - Retrieves Products after the given id.
* `getProductsCategoryCategoryIdCountJson` - Count Products filtered by category.
* `getProductsCategoryCategoryIdJson` - Retrieve Products filtered by category.
* `getProductsCountJson` - Count all Products.
* `getProductsIdAttachmentsAttachmentIdJson` - Retrieve a single Product Attachment.
* `getProductsIdAttachmentsCountJson` - Count all Product Attachments.
* `getProductsIdAttachmentsJson` - Retrieve all Product Attachments.
* `getProductsIdDigitalProductsCountJson` - Count all Product DigitalProducts.
* `getProductsIdDigitalProductsDigitalProductIdJson` - Retrieve a single Product DigitalProduct.
* `getProductsIdDigitalProductsJson` - Retrieve all Product DigitalProducts.
* `getProductsIdFieldsCountJson` - Count all Product Custom Fields.
* `getProductsIdFieldsJson` - Retrieve all Product Custom Fields
* `getProductsIdImagesCountJson` - Count all Product Images.
* `getProductsIdImagesImageIdJson` - Retrieve a single Product Image.
* `getProductsIdImagesJson` - Retrieve all Product Images.
* `getProductsIdJson` - Retrieve a single Product.
* `getProductsIdOptionsCountJson` - Count all Product Options.
* `getProductsIdOptionsJson` - Retrieve all Product Options.
* `getProductsIdOptionsOptionIdJson` - Retrieve a single Product Option.
* `getProductsIdOptionsOptionIdValuesCountJson` - Count all Product Option Values.
* `getProductsIdOptionsOptionIdValuesJson` - Retrieve all Product Option Values.
* `getProductsIdOptionsOptionIdValuesValueIdJson` - Retrieve a single Product Option Value.
* `getProductsIdVariantsCountJson` - Count all Product Variants.
* `getProductsIdVariantsJson` - Retrieve all Product Variants.
* `getProductsIdVariantsVariantIdJson` - Retrieve a single Product Variant.
* `getProductsJson` - Retrieve all Products.
* `getProductsSearchJson` - Retrieve a Product List from a query.
* `getProductsStatusStatusCountJson` - Count Products filtered by status.
* `getProductsStatusStatusJson` - Retrieve Products filtered by status.
* `getPromotionsIdJson` - Retrieve a single Promotion.
* `getPromotionsJson` - Retrieve all Promotions.
* `getShippingMethodsIdJson` - Retrieve a single Shipping Method.
* `getShippingMethodsJson` - Retrieve all Store's Shipping Methods.
* `getStoreCheckStatusJson` - Retrive store creation status.
* `getStoreInfoJson` - Retrieve Store Information.
* `getStoreLanguagesJson` - Retrieve Store Languages.
* `getTaxesIdJson` - Retrieve a single Tax information.
* `getTaxesJson` - Retrieve all Taxes.
* `postCategoriesJson` - Create a new Category.
* `postCheckoutCustomFieldsJson` - Create a new CheckoutCustomField.
* `postCustomFieldsIdSelectOptionsJson` - Create a new Custom Field Select Option.
* `postCustomFieldsJson` - Create a new Custom Field.
* `postCustomerCategoriesIdCustomersJson` - Adds Customers to a CustomerCategory.
* `postCustomerCategoriesJson` - Create a new CustomerCategory.
* `postCustomersIdFields` - Adds Customer Additional Fields to a Customer.
* `postCustomersJson` - Create a new Customer.
* `postHooksJson` - Create a new Hook.
* `postJsappsJson` - Create a Store JSApp.
* `postOrdersIdHistoryJson` - Create a new Order History Entry.
* `postOrdersJson` - Create a new Order.
* `postPagesJson` - Create a new Page.
* `postProductsIdAttachmentsJson` - Create a new Product Attachment.
* `postProductsIdDigitalProductsJson` - Create a new Product DigitalProduct.
* `postProductsIdFieldsJson` - Add an existing Custom Field to a Product.
* `postProductsIdImagesJson` - Create a new Product Image.
* `postProductsIdOptionsJson` - Create a new Product Option.
* `postProductsIdOptionsOptionIdValuesJson` - Create a new Product Option Value.
* `postProductsIdVariantsJson` - Create a new Product Variant.
* `postProductsJson` - Create a new Product.
* `postPromotionsJson` - Create a new Promotion.
* `postShippingMethodsJson` - Creates a Shipping Method.
* `postStoreCreateJson` - Create a Partnered Store
* `postTaxesJson` - Create a new Tax.
* `putCategoriesIdJson` - Modify an existing Category.
* `putCheckoutCustomFieldsIdJson` - Update a CheckoutCustomField.
* `putCustomFieldsIdJson` - Update a CustomField.
* `putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson` - Update a SelectOption from a CustomField.
* `putCustomerCategoriesIdJson` - Update a CustomerCategory.
* `putCustomersIdFieldsFieldId` - Update a Customer Additional Field.
* `putCustomersIdJson` - Update a new Customer.
* `putHooksIdJson` - Update a Hook.
* `putOrdersIdJson` - Modify an existing Order.
* `putPagesIdJson` - Update a Page.
* `putProductsIdJson` - Modify an existing Product.
* `putProductsIdOptionsOptionIdJson` - Modify an existing Product Option.
* `putProductsIdOptionsOptionIdValuesValueIdJson` - Modify an existing Product Option Value.
* `putProductsIdVariantsVariantIdJson` - Modify an existing Product Variant.
* `putProductsProductIdFieldsFieldIdJson` - Update value of Product Custom Field
* `putPromotionsIdJson` - Update a Promotion.
* `putShippingMethodsIdJson` - Update a Shipping Method.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
