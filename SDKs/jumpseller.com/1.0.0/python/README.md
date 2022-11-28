# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteCategoriesIDJSONRequest(
    path_params=operations.DeleteCategoriesIDJSONPathParams(
        id=695806098633969240,
    ),
    query_params=operations.DeleteCategoriesIDJSONQueryParams(
        authtoken="modi",
        login="atque",
    ),
)
    
res = s.sdk.delete_categories_id_json(req)

if res.delete_categories_id_json_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_categories_id_json` - Delete an existing Category.
* `delete_checkout_custom_fields_id_json` - Delete an existing CheckoutCustomField.
* `delete_custom_fields_id_json` - Delete an existing CustomField.
* `delete_custom_fields_id_select_options_custom_field_select_option_id_json` - Delete an existing CustomFieldSelectOption.
* `delete_customer_categories_id_customers_json` - Delete Customers from an existing CustomerCategory.
* `delete_customer_categories_id_json` - Delete an existing CustomerCategory.
* `delete_customers_id_fields_field_id_` - Delete a Customer Additional Field.
* `delete_customers_id_json` - Delete an existing Customer.
* `delete_hooks_id_json` - Delete an existing Hook.
* `delete_jsapps_code_json` - Delete an existing JSApp.
* `delete_pages_id_json` - Delete an existing Page.
* `delete_products_id_attachments_attachment_id_json` - Delete a Product Attachment.
* `delete_products_id_digital_products_digital_product_id_json` - Delete a Product DigitalProduct.
* `delete_products_id_images_image_id_json` - Delete a Product Image.
* `delete_products_id_json` - Delete an existing Product.
* `delete_products_id_options_option_id_json` - Delete a Product Option.
* `delete_products_id_options_option_id_values_value_id_json` - Delete a Product Option Value.
* `delete_products_product_id_fields_field_id_json` - Delete value of Product Custom Field
* `delete_promotions_id_json` - Delete an existing Promotion.
* `delete_shipping_methods_id_json` - Delete an existing Shipping Method.
* `get_categories_count_json` - Count all Categories.
* `get_categories_id_json` - Retrieve a single Category.
* `get_categories_json` - Retrieve all Categories.
* `get_checkout_custom_fields_id_json` - Retrieve a single CheckoutCustomField.
* `get_checkout_custom_fields_json` - Retrieve all Checkout Custom Fields.
* `get_countries_country_code_json` - Retrieve a single Country information.
* `get_countries_country_code_regions_json` - Retrieve all Regions from a single Country.
* `get_countries_country_code_regions_region_code_json` - Retrieve a single Region information object.
* `get_countries_json` - Retrieve all Countries.
* `get_custom_fields_id_json` - Retrieve a single CustomField.
* `get_custom_fields_id_select_options_custom_field_select_option_id_json` - Retrieve a single SelectOption from a CustomField.
* `get_custom_fields_id_select_options_json` - Retrieve all Store's Custom Fields.
* `get_custom_fields_json` - Retrieve all Store's Custom Fields.
* `get_customer_categories_id_customers_json` - Retrieves the customers in a CustomerCategory.
* `get_customer_categories_id_json` - Retrieve a single CustomerCategory.
* `get_customer_categories_json` - Retrieve all Customer Categories.
* `get_customers_count_json` - Count all Customers.
* `get_customers_email_email_json` - Retrieve a single Customer by email.
* `get_customers_id_fields` - Retrieves the Customer Additional Field of a Customer.
* `get_customers_id_fields_field_id_` - Retrieve a single Customer Additional Field.
* `get_customers_id_json` - Retrieve a single Customer by id.
* `get_customers_json` - Retrieve all Customers.
* `get_fulfillments_count_json` - Count all Fulfillments.
* `get_fulfillments_id_json` - Retrieve a single Fulfillment.
* `get_fulfillments_json` - Retrieve all Fulfillments.
* `get_hooks_id_json` - Retrieve a single Hook.
* `get_hooks_json` - Retrieve all Hooks.
* `get_jsapps_code_json` - Retrieve a JSApp.
* `get_jsapps_json` - Retrieve all the Store's JSApps.
* `get_order_id_fulfillments_json` - Retrieve the Fulfillments associated with the Order.
* `get_orders_after_id_json` - Retrieve orders filtered by Order Id.
* `get_orders_count_json` - Count all Orders.
* `get_orders_id_history_json` - Retrieve all Order History.
* `get_orders_id_json` - Retrieve a single Order.
* `get_orders_json` - Retrieve all Orders.
* `get_orders_status_status_json` - Retrieve orders filtered by status.
* `get_pages_count_json` - Count all Pages.
* `get_pages_id_json` - Retrieve a single Page by id.
* `get_pages_json` - Retrieve all Pages.
* `get_partners_stores_json` - Retrieve statistics.
* `get_payment_methods_id_json` - Retrieve a single Payment Method.
* `get_payment_methods_json` - Retrieve all Store's Payment Methods.
* `get_products_after_id_json` - Retrieves Products after the given id.
* `get_products_category_category_id_count_json` - Count Products filtered by category.
* `get_products_category_category_id_json` - Retrieve Products filtered by category.
* `get_products_count_json` - Count all Products.
* `get_products_id_attachments_attachment_id_json` - Retrieve a single Product Attachment.
* `get_products_id_attachments_count_json` - Count all Product Attachments.
* `get_products_id_attachments_json` - Retrieve all Product Attachments.
* `get_products_id_digital_products_count_json` - Count all Product DigitalProducts.
* `get_products_id_digital_products_digital_product_id_json` - Retrieve a single Product DigitalProduct.
* `get_products_id_digital_products_json` - Retrieve all Product DigitalProducts.
* `get_products_id_fields_count_json` - Count all Product Custom Fields.
* `get_products_id_fields_json` - Retrieve all Product Custom Fields
* `get_products_id_images_count_json` - Count all Product Images.
* `get_products_id_images_image_id_json` - Retrieve a single Product Image.
* `get_products_id_images_json` - Retrieve all Product Images.
* `get_products_id_json` - Retrieve a single Product.
* `get_products_id_options_count_json` - Count all Product Options.
* `get_products_id_options_json` - Retrieve all Product Options.
* `get_products_id_options_option_id_json` - Retrieve a single Product Option.
* `get_products_id_options_option_id_values_count_json` - Count all Product Option Values.
* `get_products_id_options_option_id_values_json` - Retrieve all Product Option Values.
* `get_products_id_options_option_id_values_value_id_json` - Retrieve a single Product Option Value.
* `get_products_id_variants_count_json` - Count all Product Variants.
* `get_products_id_variants_json` - Retrieve all Product Variants.
* `get_products_id_variants_variant_id_json` - Retrieve a single Product Variant.
* `get_products_json` - Retrieve all Products.
* `get_products_search_json` - Retrieve a Product List from a query.
* `get_products_status_status_count_json` - Count Products filtered by status.
* `get_products_status_status_json` - Retrieve Products filtered by status.
* `get_promotions_id_json` - Retrieve a single Promotion.
* `get_promotions_json` - Retrieve all Promotions.
* `get_shipping_methods_id_json` - Retrieve a single Shipping Method.
* `get_shipping_methods_json` - Retrieve all Store's Shipping Methods.
* `get_store_check_status_json` - Retrive store creation status.
* `get_store_info_json` - Retrieve Store Information.
* `get_store_languages_json` - Retrieve Store Languages.
* `get_taxes_id_json` - Retrieve a single Tax information.
* `get_taxes_json` - Retrieve all Taxes.
* `post_categories_json` - Create a new Category.
* `post_checkout_custom_fields_json` - Create a new CheckoutCustomField.
* `post_custom_fields_id_select_options_json` - Create a new Custom Field Select Option.
* `post_custom_fields_json` - Create a new Custom Field.
* `post_customer_categories_id_customers_json` - Adds Customers to a CustomerCategory.
* `post_customer_categories_json` - Create a new CustomerCategory.
* `post_customers_id_fields` - Adds Customer Additional Fields to a Customer.
* `post_customers_json` - Create a new Customer.
* `post_hooks_json` - Create a new Hook.
* `post_jsapps_json` - Create a Store JSApp.
* `post_orders_id_history_json` - Create a new Order History Entry.
* `post_orders_json` - Create a new Order.
* `post_pages_json` - Create a new Page.
* `post_products_id_attachments_json` - Create a new Product Attachment.
* `post_products_id_digital_products_json` - Create a new Product DigitalProduct.
* `post_products_id_fields_json` - Add an existing Custom Field to a Product.
* `post_products_id_images_json` - Create a new Product Image.
* `post_products_id_options_json` - Create a new Product Option.
* `post_products_id_options_option_id_values_json` - Create a new Product Option Value.
* `post_products_id_variants_json` - Create a new Product Variant.
* `post_products_json` - Create a new Product.
* `post_promotions_json` - Create a new Promotion.
* `post_shipping_methods_json` - Creates a Shipping Method.
* `post_store_create_json` - Create a Partnered Store
* `post_taxes_json` - Create a new Tax.
* `put_categories_id_json` - Modify an existing Category.
* `put_checkout_custom_fields_id_json` - Update a CheckoutCustomField.
* `put_custom_fields_id_json` - Update a CustomField.
* `put_custom_fields_id_select_options_custom_field_select_option_id_json` - Update a SelectOption from a CustomField.
* `put_customer_categories_id_json` - Update a CustomerCategory.
* `put_customers_id_fields_field_id_` - Update a Customer Additional Field.
* `put_customers_id_json` - Update a new Customer.
* `put_hooks_id_json` - Update a Hook.
* `put_orders_id_json` - Modify an existing Order.
* `put_pages_id_json` - Update a Page.
* `put_products_id_json` - Modify an existing Product.
* `put_products_id_options_option_id_json` - Modify an existing Product Option.
* `put_products_id_options_option_id_values_value_id_json` - Modify an existing Product Option Value.
* `put_products_id_variants_variant_id_json` - Modify an existing Product Variant.
* `put_products_product_id_fields_field_id_json` - Update value of Product Custom Field
* `put_promotions_id_json` - Update a Promotion.
* `put_shipping_methods_id_json` - Update a Shipping Method.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
