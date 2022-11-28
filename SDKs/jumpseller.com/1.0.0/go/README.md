# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteCategoriesIDJSONRequest{
        PathParams: operations.DeleteCategoriesIDJSONPathParams{
            ID: 695806098633969240,
        },
        QueryParams: operations.DeleteCategoriesIDJSONQueryParams{
            Authtoken: "modi",
            Login: "atque",
        },
    }
    
    res, err := s.Sdk.DeleteCategoriesIDJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCategoriesIDJSON200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteCategoriesIDJSON` - Delete an existing Category.
* `DeleteCheckoutCustomFieldsIDJSON` - Delete an existing CheckoutCustomField.
* `DeleteCustomFieldsIDJSON` - Delete an existing CustomField.
* `DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON` - Delete an existing CustomFieldSelectOption.
* `DeleteCustomerCategoriesIDCustomersJSON` - Delete Customers from an existing CustomerCategory.
* `DeleteCustomerCategoriesIDJSON` - Delete an existing CustomerCategory.
* `DeleteCustomersIDFieldsFieldID` - Delete a Customer Additional Field.
* `DeleteCustomersIDJSON` - Delete an existing Customer.
* `DeleteHooksIDJSON` - Delete an existing Hook.
* `DeleteJsappsCodeJSON` - Delete an existing JSApp.
* `DeletePagesIDJSON` - Delete an existing Page.
* `DeleteProductsIDAttachmentsAttachmentIDJSON` - Delete a Product Attachment.
* `DeleteProductsIDDigitalProductsDigitalProductIDJSON` - Delete a Product DigitalProduct.
* `DeleteProductsIDImagesImageIDJSON` - Delete a Product Image.
* `DeleteProductsIDJSON` - Delete an existing Product.
* `DeleteProductsIDOptionsOptionIDJSON` - Delete a Product Option.
* `DeleteProductsIDOptionsOptionIDValuesValueIDJSON` - Delete a Product Option Value.
* `DeleteProductsProductIDFieldsFieldIDJSON` - Delete value of Product Custom Field
* `DeletePromotionsIDJSON` - Delete an existing Promotion.
* `DeleteShippingMethodsIDJSON` - Delete an existing Shipping Method.
* `GetCategoriesCountJSON` - Count all Categories.
* `GetCategoriesIDJSON` - Retrieve a single Category.
* `GetCategoriesJSON` - Retrieve all Categories.
* `GetCheckoutCustomFieldsIDJSON` - Retrieve a single CheckoutCustomField.
* `GetCheckoutCustomFieldsJSON` - Retrieve all Checkout Custom Fields.
* `GetCountriesCountryCodeJSON` - Retrieve a single Country information.
* `GetCountriesCountryCodeRegionsJSON` - Retrieve all Regions from a single Country.
* `GetCountriesCountryCodeRegionsRegionCodeJSON` - Retrieve a single Region information object.
* `GetCountriesJSON` - Retrieve all Countries.
* `GetCustomFieldsIDJSON` - Retrieve a single CustomField.
* `GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON` - Retrieve a single SelectOption from a CustomField.
* `GetCustomFieldsIDSelectOptionsJSON` - Retrieve all Store's Custom Fields.
* `GetCustomFieldsJSON` - Retrieve all Store's Custom Fields.
* `GetCustomerCategoriesIDCustomersJSON` - Retrieves the customers in a CustomerCategory.
* `GetCustomerCategoriesIDJSON` - Retrieve a single CustomerCategory.
* `GetCustomerCategoriesJSON` - Retrieve all Customer Categories.
* `GetCustomersCountJSON` - Count all Customers.
* `GetCustomersEmailEmailJSON` - Retrieve a single Customer by email.
* `GetCustomersIDFields` - Retrieves the Customer Additional Field of a Customer.
* `GetCustomersIDFieldsFieldID` - Retrieve a single Customer Additional Field.
* `GetCustomersIDJSON` - Retrieve a single Customer by id.
* `GetCustomersJSON` - Retrieve all Customers.
* `GetFulfillmentsCountJSON` - Count all Fulfillments.
* `GetFulfillmentsIDJSON` - Retrieve a single Fulfillment.
* `GetFulfillmentsJSON` - Retrieve all Fulfillments.
* `GetHooksIDJSON` - Retrieve a single Hook.
* `GetHooksJSON` - Retrieve all Hooks.
* `GetJsappsCodeJSON` - Retrieve a JSApp.
* `GetJsappsJSON` - Retrieve all the Store's JSApps.
* `GetOrderIDFulfillmentsJSON` - Retrieve the Fulfillments associated with the Order.
* `GetOrdersAfterIDJSON` - Retrieve orders filtered by Order Id.
* `GetOrdersCountJSON` - Count all Orders.
* `GetOrdersIDHistoryJSON` - Retrieve all Order History.
* `GetOrdersIDJSON` - Retrieve a single Order.
* `GetOrdersJSON` - Retrieve all Orders.
* `GetOrdersStatusStatusJSON` - Retrieve orders filtered by status.
* `GetPagesCountJSON` - Count all Pages.
* `GetPagesIDJSON` - Retrieve a single Page by id.
* `GetPagesJSON` - Retrieve all Pages.
* `GetPartnersStoresJSON` - Retrieve statistics.
* `GetPaymentMethodsIDJSON` - Retrieve a single Payment Method.
* `GetPaymentMethodsJSON` - Retrieve all Store's Payment Methods.
* `GetProductsAfterIDJSON` - Retrieves Products after the given id.
* `GetProductsCategoryCategoryIDCountJSON` - Count Products filtered by category.
* `GetProductsCategoryCategoryIDJSON` - Retrieve Products filtered by category.
* `GetProductsCountJSON` - Count all Products.
* `GetProductsIDAttachmentsAttachmentIDJSON` - Retrieve a single Product Attachment.
* `GetProductsIDAttachmentsCountJSON` - Count all Product Attachments.
* `GetProductsIDAttachmentsJSON` - Retrieve all Product Attachments.
* `GetProductsIDDigitalProductsCountJSON` - Count all Product DigitalProducts.
* `GetProductsIDDigitalProductsDigitalProductIDJSON` - Retrieve a single Product DigitalProduct.
* `GetProductsIDDigitalProductsJSON` - Retrieve all Product DigitalProducts.
* `GetProductsIDFieldsCountJSON` - Count all Product Custom Fields.
* `GetProductsIDFieldsJSON` - Retrieve all Product Custom Fields
* `GetProductsIDImagesCountJSON` - Count all Product Images.
* `GetProductsIDImagesImageIDJSON` - Retrieve a single Product Image.
* `GetProductsIDImagesJSON` - Retrieve all Product Images.
* `GetProductsIDJSON` - Retrieve a single Product.
* `GetProductsIDOptionsCountJSON` - Count all Product Options.
* `GetProductsIDOptionsJSON` - Retrieve all Product Options.
* `GetProductsIDOptionsOptionIDJSON` - Retrieve a single Product Option.
* `GetProductsIDOptionsOptionIDValuesCountJSON` - Count all Product Option Values.
* `GetProductsIDOptionsOptionIDValuesJSON` - Retrieve all Product Option Values.
* `GetProductsIDOptionsOptionIDValuesValueIDJSON` - Retrieve a single Product Option Value.
* `GetProductsIDVariantsCountJSON` - Count all Product Variants.
* `GetProductsIDVariantsJSON` - Retrieve all Product Variants.
* `GetProductsIDVariantsVariantIDJSON` - Retrieve a single Product Variant.
* `GetProductsJSON` - Retrieve all Products.
* `GetProductsSearchJSON` - Retrieve a Product List from a query.
* `GetProductsStatusStatusCountJSON` - Count Products filtered by status.
* `GetProductsStatusStatusJSON` - Retrieve Products filtered by status.
* `GetPromotionsIDJSON` - Retrieve a single Promotion.
* `GetPromotionsJSON` - Retrieve all Promotions.
* `GetShippingMethodsIDJSON` - Retrieve a single Shipping Method.
* `GetShippingMethodsJSON` - Retrieve all Store's Shipping Methods.
* `GetStoreCheckStatusJSON` - Retrive store creation status.
* `GetStoreInfoJSON` - Retrieve Store Information.
* `GetStoreLanguagesJSON` - Retrieve Store Languages.
* `GetTaxesIDJSON` - Retrieve a single Tax information.
* `GetTaxesJSON` - Retrieve all Taxes.
* `PostCategoriesJSON` - Create a new Category.
* `PostCheckoutCustomFieldsJSON` - Create a new CheckoutCustomField.
* `PostCustomFieldsIDSelectOptionsJSON` - Create a new Custom Field Select Option.
* `PostCustomFieldsJSON` - Create a new Custom Field.
* `PostCustomerCategoriesIDCustomersJSON` - Adds Customers to a CustomerCategory.
* `PostCustomerCategoriesJSON` - Create a new CustomerCategory.
* `PostCustomersIDFields` - Adds Customer Additional Fields to a Customer.
* `PostCustomersJSON` - Create a new Customer.
* `PostHooksJSON` - Create a new Hook.
* `PostJsappsJSON` - Create a Store JSApp.
* `PostOrdersIDHistoryJSON` - Create a new Order History Entry.
* `PostOrdersJSON` - Create a new Order.
* `PostPagesJSON` - Create a new Page.
* `PostProductsIDAttachmentsJSON` - Create a new Product Attachment.
* `PostProductsIDDigitalProductsJSON` - Create a new Product DigitalProduct.
* `PostProductsIDFieldsJSON` - Add an existing Custom Field to a Product.
* `PostProductsIDImagesJSON` - Create a new Product Image.
* `PostProductsIDOptionsJSON` - Create a new Product Option.
* `PostProductsIDOptionsOptionIDValuesJSON` - Create a new Product Option Value.
* `PostProductsIDVariantsJSON` - Create a new Product Variant.
* `PostProductsJSON` - Create a new Product.
* `PostPromotionsJSON` - Create a new Promotion.
* `PostShippingMethodsJSON` - Creates a Shipping Method.
* `PostStoreCreateJSON` - Create a Partnered Store
* `PostTaxesJSON` - Create a new Tax.
* `PutCategoriesIDJSON` - Modify an existing Category.
* `PutCheckoutCustomFieldsIDJSON` - Update a CheckoutCustomField.
* `PutCustomFieldsIDJSON` - Update a CustomField.
* `PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON` - Update a SelectOption from a CustomField.
* `PutCustomerCategoriesIDJSON` - Update a CustomerCategory.
* `PutCustomersIDFieldsFieldID` - Update a Customer Additional Field.
* `PutCustomersIDJSON` - Update a new Customer.
* `PutHooksIDJSON` - Update a Hook.
* `PutOrdersIDJSON` - Modify an existing Order.
* `PutPagesIDJSON` - Update a Page.
* `PutProductsIDJSON` - Modify an existing Product.
* `PutProductsIDOptionsOptionIDJSON` - Modify an existing Product Option.
* `PutProductsIDOptionsOptionIDValuesValueIDJSON` - Modify an existing Product Option Value.
* `PutProductsIDVariantsVariantIDJSON` - Modify an existing Product Variant.
* `PutProductsProductIDFieldsFieldIDJSON` - Update value of Product Custom Field
* `PutPromotionsIDJSON` - Update a Promotion.
* `PutShippingMethodsIDJSON` - Update a Shipping Method.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
