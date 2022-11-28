

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.jumpseller.com/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def delete_categories_id_json(self, request: operations.DeleteCategoriesIDJSONRequest) -> operations.DeleteCategoriesIDJSONResponse:
        r"""Delete an existing Category.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCategoriesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_categories_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_checkout_custom_fields_id_json(self, request: operations.DeleteCheckoutCustomFieldsIDJSONRequest) -> operations.DeleteCheckoutCustomFieldsIDJSONResponse:
        r"""Delete an existing CheckoutCustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/checkout_custom_fields/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCheckoutCustomFieldsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_checkout_custom_fields_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_custom_fields_id_json(self, request: operations.DeleteCustomFieldsIDJSONRequest) -> operations.DeleteCustomFieldsIDJSONResponse:
        r"""Delete an existing CustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomFieldsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_custom_fields_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_custom_fields_id_select_options_custom_field_select_option_id_json(self, request: operations.DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest) -> operations.DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse:
        r"""Delete an existing CustomFieldSelectOption.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}/select_options/{custom_field_select_option_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_custom_fields_id_select_options_custom_field_select_option_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_customer_categories_id_customers_json(self, request: operations.DeleteCustomerCategoriesIDCustomersJSONRequest) -> operations.DeleteCustomerCategoriesIDCustomersJSONResponse:
        r"""Delete Customers from an existing CustomerCategory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customer_categories/{id}/customers.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerCategoriesIDCustomersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_customer_categories_id_customers_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_customer_categories_id_json(self, request: operations.DeleteCustomerCategoriesIDJSONRequest) -> operations.DeleteCustomerCategoriesIDJSONResponse:
        r"""Delete an existing CustomerCategory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customer_categories/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomerCategoriesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_customer_categories_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_customers_id_fields_field_id_(self, request: operations.DeleteCustomersIDFieldsFieldIDRequest) -> operations.DeleteCustomersIDFieldsFieldIDResponse:
        r"""Delete a Customer Additional Field.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}/fields/{field_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomersIDFieldsFieldIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_customers_id_fields_field_id_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_customers_id_json(self, request: operations.DeleteCustomersIDJSONRequest) -> operations.DeleteCustomersIDJSONResponse:
        r"""Delete an existing Customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomersIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_customers_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_hooks_id_json(self, request: operations.DeleteHooksIDJSONRequest) -> operations.DeleteHooksIDJSONResponse:
        r"""Delete an existing Hook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hooks/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteHooksIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_hooks_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_jsapps_code_json(self, request: operations.DeleteJsappsCodeJSONRequest) -> operations.DeleteJsappsCodeJSONResponse:
        r"""Delete an existing JSApp.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jsapps/{code}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteJsappsCodeJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_jsapps_code_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_pages_id_json(self, request: operations.DeletePagesIDJSONRequest) -> operations.DeletePagesIDJSONResponse:
        r"""Delete an existing Page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pages/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePagesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_pages_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_products_id_attachments_attachment_id_json(self, request: operations.DeleteProductsIDAttachmentsAttachmentIDJSONRequest) -> operations.DeleteProductsIDAttachmentsAttachmentIDJSONResponse:
        r"""Delete a Product Attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/attachments/{attachment_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsIDAttachmentsAttachmentIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_products_id_attachments_attachment_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_products_id_digital_products_digital_product_id_json(self, request: operations.DeleteProductsIDDigitalProductsDigitalProductIDJSONRequest) -> operations.DeleteProductsIDDigitalProductsDigitalProductIDJSONResponse:
        r"""Delete a Product DigitalProduct.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/digital_products/{digital_product_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsIDDigitalProductsDigitalProductIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_products_id_digital_products_digital_product_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_products_id_images_image_id_json(self, request: operations.DeleteProductsIDImagesImageIDJSONRequest) -> operations.DeleteProductsIDImagesImageIDJSONResponse:
        r"""Delete a Product Image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/images/{image_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsIDImagesImageIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_products_id_images_image_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_products_id_json(self, request: operations.DeleteProductsIDJSONRequest) -> operations.DeleteProductsIDJSONResponse:
        r"""Delete an existing Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_products_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_products_id_options_option_id_json(self, request: operations.DeleteProductsIDOptionsOptionIDJSONRequest) -> operations.DeleteProductsIDOptionsOptionIDJSONResponse:
        r"""Delete a Product Option.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsIDOptionsOptionIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_products_id_options_option_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_products_id_options_option_id_values_value_id_json(self, request: operations.DeleteProductsIDOptionsOptionIDValuesValueIDJSONRequest) -> operations.DeleteProductsIDOptionsOptionIDValuesValueIDJSONResponse:
        r"""Delete a Product Option Value.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}/values/{value_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsIDOptionsOptionIDValuesValueIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_products_id_options_option_id_values_value_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_products_product_id_fields_field_id_json(self, request: operations.DeleteProductsProductIDFieldsFieldIDJSONRequest) -> operations.DeleteProductsProductIDFieldsFieldIDJSONResponse:
        r"""Delete value of Product Custom Field
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{product_id}/fields/{field_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductsProductIDFieldsFieldIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.message_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_promotions_id_json(self, request: operations.DeletePromotionsIDJSONRequest) -> operations.DeletePromotionsIDJSONResponse:
        r"""Delete an existing Promotion.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/promotions/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePromotionsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_promotions_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def delete_shipping_methods_id_json(self, request: operations.DeleteShippingMethodsIDJSONRequest) -> operations.DeleteShippingMethodsIDJSONResponse:
        r"""Delete an existing Shipping Method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipping_methods/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteShippingMethodsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.delete_shipping_methods_id_json_200_application_json_string = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_categories_count_json(self, request: operations.GetCategoriesCountJSONRequest) -> operations.GetCategoriesCountJSONResponse:
        r"""Count all Categories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories/count.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out

        return res

    
    def get_categories_id_json(self, request: operations.GetCategoriesIDJSONRequest) -> operations.GetCategoriesIDJSONResponse:
        r"""Retrieve a single Category.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Category])
                res.category = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_categories_json(self, request: operations.GetCategoriesJSONRequest) -> operations.GetCategoriesJSONResponse:
        r"""Retrieve all Categories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoriesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Category])
                res.category = out

        return res

    
    def get_checkout_custom_fields_id_json(self, request: operations.GetCheckoutCustomFieldsIDJSONRequest) -> operations.GetCheckoutCustomFieldsIDJSONResponse:
        r"""Retrieve a single CheckoutCustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/checkout_custom_fields/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCheckoutCustomFieldsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckoutCustomField])
                res.checkout_custom_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_checkout_custom_fields_json(self, request: operations.GetCheckoutCustomFieldsJSONRequest) -> operations.GetCheckoutCustomFieldsJSONResponse:
        r"""Retrieve all Checkout Custom Fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/checkout_custom_fields.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCheckoutCustomFieldsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CheckoutCustomField]])
                res.checkout_custom_fields = out

        return res

    
    def get_countries_country_code_json(self, request: operations.GetCountriesCountryCodeJSONRequest) -> operations.GetCountriesCountryCodeJSONResponse:
        r"""Retrieve a single Country information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/countries/{country_code}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountriesCountryCodeJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.country = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_countries_country_code_regions_json(self, request: operations.GetCountriesCountryCodeRegionsJSONRequest) -> operations.GetCountriesCountryCodeRegionsJSONResponse:
        r"""Retrieve all Regions from a single Country.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/countries/{country_code}/regions.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountriesCountryCodeRegionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.regions = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_countries_country_code_regions_region_code_json(self, request: operations.GetCountriesCountryCodeRegionsRegionCodeJSONRequest) -> operations.GetCountriesCountryCodeRegionsRegionCodeJSONResponse:
        r"""Retrieve a single Region information object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/countries/{country_code}/regions/{region_code}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountriesCountryCodeRegionsRegionCodeJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.region = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_countries_json(self, request: operations.GetCountriesJSONRequest) -> operations.GetCountriesJSONResponse:
        r"""Retrieve all Countries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/countries.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountriesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.countries = out

        return res

    
    def get_custom_fields_id_json(self, request: operations.GetCustomFieldsIDJSONRequest) -> operations.GetCustomFieldsIDJSONResponse:
        r"""Retrieve a single CustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomFieldsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomField])
                res.custom_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_custom_fields_id_select_options_custom_field_select_option_id_json(self, request: operations.GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest) -> operations.GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse:
        r"""Retrieve a single SelectOption from a CustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}/select_options/{custom_field_select_option_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomFieldSelectOption])
                res.custom_field_select_option = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_custom_fields_id_select_options_json(self, request: operations.GetCustomFieldsIDSelectOptionsJSONRequest) -> operations.GetCustomFieldsIDSelectOptionsJSONResponse:
        r"""Retrieve all Store's Custom Fields.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}/select_options.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomFieldsIDSelectOptionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CustomFieldSelectOption]])
                res.custom_field_select_options = out

        return res

    
    def get_custom_fields_json(self, request: operations.GetCustomFieldsJSONRequest) -> operations.GetCustomFieldsJSONResponse:
        r"""Retrieve all Store's Custom Fields.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custom_fields.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomFieldsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CustomField]])
                res.custom_fields = out

        return res

    
    def get_customer_categories_id_customers_json(self, request: operations.GetCustomerCategoriesIDCustomersJSONRequest) -> operations.GetCustomerCategoriesIDCustomersJSONResponse:
        r"""Retrieves the customers in a CustomerCategory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customer_categories/{id}/customers.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomerCategoriesIDCustomersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Customer]])
                res.customers = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_customer_categories_id_json(self, request: operations.GetCustomerCategoriesIDJSONRequest) -> operations.GetCustomerCategoriesIDJSONResponse:
        r"""Retrieve a single CustomerCategory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customer_categories/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomerCategoriesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerCategory])
                res.customer_category = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_customer_categories_json(self, request: operations.GetCustomerCategoriesJSONRequest) -> operations.GetCustomerCategoriesJSONResponse:
        r"""Retrieve all Customer Categories.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customer_categories.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomerCategoriesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CustomerCategory]])
                res.customer_categories = out

        return res

    
    def get_customers_count_json(self, request: operations.GetCustomersCountJSONRequest) -> operations.GetCustomersCountJSONResponse:
        r"""Count all Customers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customers/count.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out

        return res

    
    def get_customers_email_email_json(self, request: operations.GetCustomersEmailEmailJSONRequest) -> operations.GetCustomersEmailEmailJSONResponse:
        r"""Retrieve a single Customer by email.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/email/{email}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersEmailEmailJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Customer])
                res.customer = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_customers_id_fields(self, request: operations.GetCustomersIDFieldsRequest) -> operations.GetCustomersIDFieldsResponse:
        r"""Retrieves the Customer Additional Field of a Customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}/fields", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersIDFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CustomerAdditionalField]])
                res.customer_additional_fields = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_customers_id_fields_field_id_(self, request: operations.GetCustomersIDFieldsFieldIDRequest) -> operations.GetCustomersIDFieldsFieldIDResponse:
        r"""Retrieve a single Customer Additional Field.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}/fields/{field_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersIDFieldsFieldIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerAdditionalField])
                res.customer_additional_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_customers_id_json(self, request: operations.GetCustomersIDJSONRequest) -> operations.GetCustomersIDJSONResponse:
        r"""Retrieve a single Customer by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Customer])
                res.customer = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_customers_json(self, request: operations.GetCustomersJSONRequest) -> operations.GetCustomersJSONResponse:
        r"""Retrieve all Customers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customers.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Customer]])
                res.customers = out

        return res

    
    def get_fulfillments_count_json(self, request: operations.GetFulfillmentsCountJSONRequest) -> operations.GetFulfillmentsCountJSONResponse:
        r"""Count all Fulfillments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fulfillments/count.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFulfillmentsCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out

        return res

    
    def get_fulfillments_id_json(self, request: operations.GetFulfillmentsIDJSONRequest) -> operations.GetFulfillmentsIDJSONResponse:
        r"""Retrieve a single Fulfillment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/fulfillments/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFulfillmentsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Fulfillment])
                res.fulfillment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_fulfillments_json(self, request: operations.GetFulfillmentsJSONRequest) -> operations.GetFulfillmentsJSONResponse:
        r"""Retrieve all Fulfillments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/fulfillments.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFulfillmentsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Fulfillment]])
                res.fulfillments = out

        return res

    
    def get_hooks_id_json(self, request: operations.GetHooksIDJSONRequest) -> operations.GetHooksIDJSONResponse:
        r"""Retrieve a single Hook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hooks/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHooksIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hook])
                res.hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_hooks_json(self, request: operations.GetHooksJSONRequest) -> operations.GetHooksJSONResponse:
        r"""Retrieve all Hooks.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hooks.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHooksJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Hook]])
                res.hooks = out

        return res

    
    def get_jsapps_code_json(self, request: operations.GetJsappsCodeJSONRequest) -> operations.GetJsappsCodeJSONResponse:
        r"""Retrieve a JSApp.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/jsapps/{code}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJsappsCodeJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JsApp])
                res.js_app = out

        return res

    
    def get_jsapps_json(self, request: operations.GetJsappsJSONRequest) -> operations.GetJsappsJSONResponse:
        r"""Retrieve all the Store's JSApps.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jsapps.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJsappsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.App])
                res.app = out

        return res

    
    def get_order_id_fulfillments_json(self, request: operations.GetOrderIDFulfillmentsJSONRequest) -> operations.GetOrderIDFulfillmentsJSONResponse:
        r"""Retrieve the Fulfillments associated with the Order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/order/{id}/fulfillments.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrderIDFulfillmentsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Fulfillment]])
                res.fulfillments = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_orders_after_id_json(self, request: operations.GetOrdersAfterIDJSONRequest) -> operations.GetOrdersAfterIDJSONResponse:
        r"""Retrieve orders filtered by Order Id.
        For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/after/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersAfterIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Order])
                res.order = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_orders_count_json(self, request: operations.GetOrdersCountJSONRequest) -> operations.GetOrdersCountJSONResponse:
        r"""Count all Orders.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/orders/count.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out

        return res

    
    def get_orders_id_history_json(self, request: operations.GetOrdersIDHistoryJSONRequest) -> operations.GetOrdersIDHistoryJSONResponse:
        r"""Retrieve all Order History.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}/history.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersIDHistoryJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrderHistory]])
                res.order_histories = out

        return res

    
    def get_orders_id_json(self, request: operations.GetOrdersIDJSONRequest) -> operations.GetOrdersIDJSONResponse:
        r"""Retrieve a single Order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Order])
                res.order = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_orders_json(self, request: operations.GetOrdersJSONRequest) -> operations.GetOrdersJSONResponse:
        r"""Retrieve all Orders.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/orders.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Order]])
                res.orders = out

        return res

    
    def get_orders_status_status_json(self, request: operations.GetOrdersStatusStatusJSONRequest) -> operations.GetOrdersStatusStatusJSONResponse:
        r"""Retrieve orders filtered by status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/status/{status}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersStatusStatusJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Order]])
                res.orders = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.status_invalid = out

        return res

    
    def get_pages_count_json(self, request: operations.GetPagesCountJSONRequest) -> operations.GetPagesCountJSONResponse:
        r"""Count all Pages.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pages/count.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPagesCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out

        return res

    
    def get_pages_id_json(self, request: operations.GetPagesIDJSONRequest) -> operations.GetPagesIDJSONResponse:
        r"""Retrieve a single Page by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pages/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPagesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_pages_json(self, request: operations.GetPagesJSONRequest) -> operations.GetPagesJSONResponse:
        r"""Retrieve all Pages.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pages.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPagesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Page]])
                res.pages = out

        return res

    
    def get_partners_stores_json(self, request: operations.GetPartnersStoresJSONRequest) -> operations.GetPartnersStoresJSONResponse:
        r"""Retrieve statistics.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/partners/stores.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPartnersStoresJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Type]])
                res.types = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartnerError])
                res.partner_error = out

        return res

    
    def get_payment_methods_id_json(self, request: operations.GetPaymentMethodsIDJSONRequest) -> operations.GetPaymentMethodsIDJSONResponse:
        r"""Retrieve a single Payment Method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/payment_methods/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentMethodsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentMethod])
                res.payment_method = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_payment_methods_json(self, request: operations.GetPaymentMethodsJSONRequest) -> operations.GetPaymentMethodsJSONResponse:
        r"""Retrieve all Store's Payment Methods.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/payment_methods.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentMethodsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PaymentMethod]])
                res.payment_methods = out

        return res

    
    def get_products_after_id_json(self, request: operations.GetProductsAfterIDJSONRequest) -> operations.GetProductsAfterIDJSONResponse:
        r"""Retrieves Products after the given id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/after/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsAfterIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Product]])
                res.products = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_category_category_id_count_json(self, request: operations.GetProductsCategoryCategoryIDCountJSONRequest) -> operations.GetProductsCategoryCategoryIDCountJSONResponse:
        r"""Count Products filtered by category.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/category/{category_id}/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsCategoryCategoryIDCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_category_category_id_json(self, request: operations.GetProductsCategoryCategoryIDJSONRequest) -> operations.GetProductsCategoryCategoryIDJSONResponse:
        r"""Retrieve Products filtered by category.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/category/{category_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsCategoryCategoryIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Product]])
                res.products = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_count_json(self, request: operations.GetProductsCountJSONRequest) -> operations.GetProductsCountJSONResponse:
        r"""Count all Products.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/products/count.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out

        return res

    
    def get_products_id_attachments_attachment_id_json(self, request: operations.GetProductsIDAttachmentsAttachmentIDJSONRequest) -> operations.GetProductsIDAttachmentsAttachmentIDJSONResponse:
        r"""Retrieve a single Product Attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/attachments/{attachment_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDAttachmentsAttachmentIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Attachment])
                res.attachment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_attachments_count_json(self, request: operations.GetProductsIDAttachmentsCountJSONRequest) -> operations.GetProductsIDAttachmentsCountJSONResponse:
        r"""Count all Product Attachments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/attachments/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDAttachmentsCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_attachments_json(self, request: operations.GetProductsIDAttachmentsJSONRequest) -> operations.GetProductsIDAttachmentsJSONResponse:
        r"""Retrieve all Product Attachments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/attachments.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDAttachmentsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Attachment]])
                res.attachments = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_digital_products_count_json(self, request: operations.GetProductsIDDigitalProductsCountJSONRequest) -> operations.GetProductsIDDigitalProductsCountJSONResponse:
        r"""Count all Product DigitalProducts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/digital_products/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDDigitalProductsCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_digital_products_digital_product_id_json(self, request: operations.GetProductsIDDigitalProductsDigitalProductIDJSONRequest) -> operations.GetProductsIDDigitalProductsDigitalProductIDJSONResponse:
        r"""Retrieve a single Product DigitalProduct.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/digital_products/{digital_product_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDDigitalProductsDigitalProductIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DigitalProduct])
                res.digital_product = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_digital_products_json(self, request: operations.GetProductsIDDigitalProductsJSONRequest) -> operations.GetProductsIDDigitalProductsJSONResponse:
        r"""Retrieve all Product DigitalProducts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/digital_products.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDDigitalProductsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DigitalProduct]])
                res.digital_products = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_fields_count_json(self, request: operations.GetProductsIDFieldsCountJSONRequest) -> operations.GetProductsIDFieldsCountJSONResponse:
        r"""Count all Product Custom Fields.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/fields/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDFieldsCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_fields_json(self, request: operations.GetProductsIDFieldsJSONRequest) -> operations.GetProductsIDFieldsJSONResponse:
        r"""Retrieve all Product Custom Fields
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/fields.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDFieldsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductCustomField]])
                res.product_custom_fields = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_images_count_json(self, request: operations.GetProductsIDImagesCountJSONRequest) -> operations.GetProductsIDImagesCountJSONResponse:
        r"""Count all Product Images.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/images/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDImagesCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_images_image_id_json(self, request: operations.GetProductsIDImagesImageIDJSONRequest) -> operations.GetProductsIDImagesImageIDJSONResponse:
        r"""Retrieve a single Product Image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/images/{image_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDImagesImageIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Image])
                res.image = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_images_json(self, request: operations.GetProductsIDImagesJSONRequest) -> operations.GetProductsIDImagesJSONResponse:
        r"""Retrieve all Product Images.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/images.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDImagesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Image]])
                res.images = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_json(self, request: operations.GetProductsIDJSONRequest) -> operations.GetProductsIDJSONResponse:
        r"""Retrieve a single Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_options_count_json(self, request: operations.GetProductsIDOptionsCountJSONRequest) -> operations.GetProductsIDOptionsCountJSONResponse:
        r"""Count all Product Options.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDOptionsCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_options_json(self, request: operations.GetProductsIDOptionsJSONRequest) -> operations.GetProductsIDOptionsJSONResponse:
        r"""Retrieve all Product Options.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDOptionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductOption]])
                res.product_options = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_options_option_id_json(self, request: operations.GetProductsIDOptionsOptionIDJSONRequest) -> operations.GetProductsIDOptionsOptionIDJSONResponse:
        r"""Retrieve a single Product Option.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDOptionsOptionIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductOption])
                res.product_option = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_options_option_id_values_count_json(self, request: operations.GetProductsIDOptionsOptionIDValuesCountJSONRequest) -> operations.GetProductsIDOptionsOptionIDValuesCountJSONResponse:
        r"""Count all Product Option Values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}/values/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDOptionsOptionIDValuesCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_options_option_id_values_json(self, request: operations.GetProductsIDOptionsOptionIDValuesJSONRequest) -> operations.GetProductsIDOptionsOptionIDValuesJSONResponse:
        r"""Retrieve all Product Option Values.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}/values.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDOptionsOptionIDValuesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ProductOptionValue]])
                res.product_option_values = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_options_option_id_values_value_id_json(self, request: operations.GetProductsIDOptionsOptionIDValuesValueIDJSONRequest) -> operations.GetProductsIDOptionsOptionIDValuesValueIDJSONResponse:
        r"""Retrieve a single Product Option Value.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}/values/{value_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDOptionsOptionIDValuesValueIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductOptionValue])
                res.product_option_value = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_variants_count_json(self, request: operations.GetProductsIDVariantsCountJSONRequest) -> operations.GetProductsIDVariantsCountJSONResponse:
        r"""Count all Product Variants.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/variants/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDVariantsCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_variants_json(self, request: operations.GetProductsIDVariantsJSONRequest) -> operations.GetProductsIDVariantsJSONResponse:
        r"""Retrieve all Product Variants.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/variants.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDVariantsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Variant]])
                res.variants = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_id_variants_variant_id_json(self, request: operations.GetProductsIDVariantsVariantIDJSONRequest) -> operations.GetProductsIDVariantsVariantIDJSONResponse:
        r"""Retrieve a single Product Variant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/variants/{variant_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsIDVariantsVariantIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variant])
                res.variant = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_json(self, request: operations.GetProductsJSONRequest) -> operations.GetProductsJSONResponse:
        r"""Retrieve all Products.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/products.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Product]])
                res.products = out

        return res

    
    def get_products_search_json(self, request: operations.GetProductsSearchJSONRequest) -> operations.GetProductsSearchJSONResponse:
        r"""Retrieve a Product List from a query.
        Endpoint example: 
        
        ```text
        https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description 
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/products/search.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsSearchJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Product]])
                res.products = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_products_status_status_count_json(self, request: operations.GetProductsStatusStatusCountJSONRequest) -> operations.GetProductsStatusStatusCountJSONResponse:
        r"""Count Products filtered by status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/status/{status}/count.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsStatusStatusCountJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.count = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.status_invalid = out

        return res

    
    def get_products_status_status_json(self, request: operations.GetProductsStatusStatusJSONRequest) -> operations.GetProductsStatusStatusJSONResponse:
        r"""Retrieve Products filtered by status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/status/{status}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsStatusStatusJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Product]])
                res.products = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.status_invalid = out

        return res

    
    def get_promotions_id_json(self, request: operations.GetPromotionsIDJSONRequest) -> operations.GetPromotionsIDJSONResponse:
        r"""Retrieve a single Promotion.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/promotions/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPromotionsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Promotion])
                res.promotion = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_promotions_json(self, request: operations.GetPromotionsJSONRequest) -> operations.GetPromotionsJSONResponse:
        r"""Retrieve all Promotions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/promotions.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPromotionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Promotion]])
                res.promotions = out

        return res

    
    def get_shipping_methods_id_json(self, request: operations.GetShippingMethodsIDJSONRequest) -> operations.GetShippingMethodsIDJSONResponse:
        r"""Retrieve a single Shipping Method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipping_methods/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingMethodsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingMethod])
                res.shipping_method = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_shipping_methods_json(self, request: operations.GetShippingMethodsJSONRequest) -> operations.GetShippingMethodsJSONResponse:
        r"""Retrieve all Store's Shipping Methods.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipping_methods.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetShippingMethodsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ShippingMethod]])
                res.shipping_methods = out

        return res

    
    def get_store_check_status_json(self, request: operations.GetStoreCheckStatusJSONRequest) -> operations.GetStoreCheckStatusJSONResponse:
        r"""Retrive store creation status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/store/check_status.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStoreCheckStatusJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_store_check_status_json_200_application_json_one_of = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartnerError])
                res.partner_error = out

        return res

    
    def get_store_info_json(self, request: operations.GetStoreInfoJSONRequest) -> operations.GetStoreInfoJSONResponse:
        r"""Retrieve Store Information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/store/info.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStoreInfoJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Store])
                res.store = out

        return res

    
    def get_store_languages_json(self, request: operations.GetStoreLanguagesJSONRequest) -> operations.GetStoreLanguagesJSONResponse:
        r"""Retrieve Store Languages.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/store/languages.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStoreLanguagesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.languages = out

        return res

    
    def get_taxes_id_json(self, request: operations.GetTaxesIDJSONRequest) -> operations.GetTaxesIDJSONResponse:
        r"""Retrieve a single Tax information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/taxes/{id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tax])
                res.tax = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def get_taxes_json(self, request: operations.GetTaxesJSONRequest) -> operations.GetTaxesJSONResponse:
        r"""Retrieve all Taxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/taxes.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Tax]])
                res.taxes = out

        return res

    
    def post_categories_json(self, request: operations.PostCategoriesJSONRequest) -> operations.PostCategoriesJSONResponse:
        r"""Create a new Category.
        Category's permalink is automatically generated from the given category's name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/categories.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCategoriesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Category])
                res.category = out

        return res

    
    def post_checkout_custom_fields_json(self, request: operations.PostCheckoutCustomFieldsJSONRequest) -> operations.PostCheckoutCustomFieldsJSONResponse:
        r"""Create a new CheckoutCustomField.
        Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/checkout_custom_fields.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCheckoutCustomFieldsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckoutCustomField])
                res.checkout_custom_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_custom_fields_id_select_options_json(self, request: operations.PostCustomFieldsIDSelectOptionsJSONRequest) -> operations.PostCustomFieldsIDSelectOptionsJSONResponse:
        r"""Create a new Custom Field Select Option.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}/select_options.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomFieldsIDSelectOptionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomFieldSelectOption])
                res.custom_field_select_option = out

        return res

    
    def post_custom_fields_json(self, request: operations.PostCustomFieldsJSONRequest) -> operations.PostCustomFieldsJSONResponse:
        r"""Create a new Custom Field.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custom_fields.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomFieldsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomField])
                res.custom_field = out

        return res

    
    def post_customer_categories_id_customers_json(self, request: operations.PostCustomerCategoriesIDCustomersJSONRequest) -> operations.PostCustomerCategoriesIDCustomersJSONResponse:
        r"""Adds Customers to a CustomerCategory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customer_categories/{id}/customers.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomerCategoriesIDCustomersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Customer]])
                res.customers = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_customer_categories_json(self, request: operations.PostCustomerCategoriesJSONRequest) -> operations.PostCustomerCategoriesJSONResponse:
        r"""Create a new CustomerCategory.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customer_categories.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomerCategoriesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerCategory])
                res.customer_category = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_customers_id_fields(self, request: operations.PostCustomersIDFieldsRequest) -> operations.PostCustomersIDFieldsResponse:
        r"""Adds Customer Additional Fields to a Customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}/fields", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomersIDFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerAdditionalField])
                res.customer_additional_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_customers_json(self, request: operations.PostCustomersJSONRequest) -> operations.PostCustomersJSONResponse:
        r"""Create a new Customer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/customers.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCustomersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Customer])
                res.customer = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_hooks_json(self, request: operations.PostHooksJSONRequest) -> operations.PostHooksJSONResponse:
        r"""Create a new Hook.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hooks.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostHooksJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hook])
                res.hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_jsapps_json(self, request: operations.PostJsappsJSONRequest) -> operations.PostJsappsJSONResponse:
        r"""Create a Store JSApp.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jsapps.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostJsappsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JsApp])
                res.js_app = out

        return res

    
    def post_orders_id_history_json(self, request: operations.PostOrdersIDHistoryJSONRequest) -> operations.PostOrdersIDHistoryJSONResponse:
        r"""Create a new Order History Entry.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}/history.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOrdersIDHistoryJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderHistory])
                res.order_history = out

        return res

    
    def post_orders_json(self, request: operations.PostOrdersJSONRequest) -> operations.PostOrdersJSONResponse:
        r"""Create a new Order.
        Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/orders.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOrdersJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Order])
                res.order = out

        return res

    
    def post_pages_json(self, request: operations.PostPagesJSONRequest) -> operations.PostPagesJSONResponse:
        r"""Create a new Page.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pages.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPagesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    
    def post_products_id_attachments_json(self, request: operations.PostProductsIDAttachmentsJSONRequest) -> operations.PostProductsIDAttachmentsJSONResponse:
        r"""Create a new Product Attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/attachments.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsIDAttachmentsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Attachment])
                res.attachment = out

        return res

    
    def post_products_id_digital_products_json(self, request: operations.PostProductsIDDigitalProductsJSONRequest) -> operations.PostProductsIDDigitalProductsJSONResponse:
        r"""Create a new Product DigitalProduct.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/digital_products.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsIDDigitalProductsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DigitalProduct])
                res.digital_product = out

        return res

    
    def post_products_id_fields_json(self, request: operations.PostProductsIDFieldsJSONRequest) -> operations.PostProductsIDFieldsJSONResponse:
        r"""Add an existing Custom Field to a Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/fields.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsIDFieldsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_products_id_images_json(self, request: operations.PostProductsIDImagesJSONRequest) -> operations.PostProductsIDImagesJSONResponse:
        r"""Create a new Product Image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/images.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsIDImagesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Image])
                res.image = out

        return res

    
    def post_products_id_options_json(self, request: operations.PostProductsIDOptionsJSONRequest) -> operations.PostProductsIDOptionsJSONResponse:
        r"""Create a new Product Option.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsIDOptionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductOption])
                res.product_option = out

        return res

    
    def post_products_id_options_option_id_values_json(self, request: operations.PostProductsIDOptionsOptionIDValuesJSONRequest) -> operations.PostProductsIDOptionsOptionIDValuesJSONResponse:
        r"""Create a new Product Option Value.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}/values.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsIDOptionsOptionIDValuesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductOptionValue])
                res.product_option_value = out

        return res

    
    def post_products_id_variants_json(self, request: operations.PostProductsIDVariantsJSONRequest) -> operations.PostProductsIDVariantsJSONResponse:
        r"""Create a new Product Variant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/variants.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsIDVariantsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variant])
                res.variant = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_products_json(self, request: operations.PostProductsJSONRequest) -> operations.PostProductsJSONResponse:
        r"""Create a new Product.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/products.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostProductsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out

        return res

    
    def post_promotions_json(self, request: operations.PostPromotionsJSONRequest) -> operations.PostPromotionsJSONResponse:
        r"""Create a new Promotion.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/promotions.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPromotionsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Promotion])
                res.promotion = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_shipping_methods_json(self, request: operations.PostShippingMethodsJSONRequest) -> operations.PostShippingMethodsJSONResponse:
        r"""Creates a Shipping Method.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shipping_methods.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostShippingMethodsJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingMethod])
                res.shipping_method = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def post_store_create_json(self, request: operations.PostStoreCreateJSONRequest) -> operations.PostStoreCreateJSONResponse:
        r"""Create a Partnered Store
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/store/create.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStoreCreateJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartnerStoreCode])
                res.partner_store_code = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartnerError])
                res.partner_error = out

        return res

    
    def post_taxes_json(self, request: operations.PostTaxesJSONRequest) -> operations.PostTaxesJSONResponse:
        r"""Create a new Tax.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/taxes.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTaxesJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tax])
                res.tax = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_categories_id_json(self, request: operations.PutCategoriesIDJSONRequest) -> operations.PutCategoriesIDJSONResponse:
        r"""Modify an existing Category.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCategoriesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Category])
                res.category = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_checkout_custom_fields_id_json(self, request: operations.PutCheckoutCustomFieldsIDJSONRequest) -> operations.PutCheckoutCustomFieldsIDJSONResponse:
        r"""Update a CheckoutCustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/checkout_custom_fields/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCheckoutCustomFieldsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckoutCustomField])
                res.checkout_custom_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_custom_fields_id_json(self, request: operations.PutCustomFieldsIDJSONRequest) -> operations.PutCustomFieldsIDJSONResponse:
        r"""Update a CustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomFieldsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomField])
                res.custom_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_custom_fields_id_select_options_custom_field_select_option_id_json(self, request: operations.PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest) -> operations.PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse:
        r"""Update a SelectOption from a CustomField.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custom_fields/{id}/select_options/{custom_field_select_option_id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomFieldSelectOption])
                res.custom_field_select_option = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_customer_categories_id_json(self, request: operations.PutCustomerCategoriesIDJSONRequest) -> operations.PutCustomerCategoriesIDJSONResponse:
        r"""Update a CustomerCategory.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customer_categories/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomerCategoriesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerCategory])
                res.customer_category = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_customers_id_fields_field_id_(self, request: operations.PutCustomersIDFieldsFieldIDRequest) -> operations.PutCustomersIDFieldsFieldIDResponse:
        r"""Update a Customer Additional Field.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}/fields/{field_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomersIDFieldsFieldIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerAdditionalField])
                res.customer_additional_field = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.bad_params = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_customers_id_json(self, request: operations.PutCustomersIDJSONRequest) -> operations.PutCustomersIDJSONResponse:
        r"""Update a new Customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/customers/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomersIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Customer])
                res.customer = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_hooks_id_json(self, request: operations.PutHooksIDJSONRequest) -> operations.PutHooksIDJSONResponse:
        r"""Update a Hook.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hooks/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutHooksIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hook])
                res.hook = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_orders_id_json(self, request: operations.PutOrdersIDJSONRequest) -> operations.PutOrdersIDJSONResponse:
        r"""Modify an existing Order.
        Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutOrdersIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Order])
                res.order = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_pages_id_json(self, request: operations.PutPagesIDJSONRequest) -> operations.PutPagesIDJSONResponse:
        r"""Update a Page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pages/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPagesIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_products_id_json(self, request: operations.PutProductsIDJSONRequest) -> operations.PutProductsIDJSONResponse:
        r"""Modify an existing Product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProductsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Product])
                res.product = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_products_id_options_option_id_json(self, request: operations.PutProductsIDOptionsOptionIDJSONRequest) -> operations.PutProductsIDOptionsOptionIDJSONResponse:
        r"""Modify an existing Product Option.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProductsIDOptionsOptionIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductOption])
                res.product_option = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_products_id_options_option_id_values_value_id_json(self, request: operations.PutProductsIDOptionsOptionIDValuesValueIDJSONRequest) -> operations.PutProductsIDOptionsOptionIDValuesValueIDJSONResponse:
        r"""Modify an existing Product Option Value.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/options/{option_id}/values/{value_id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProductsIDOptionsOptionIDValuesValueIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductOptionValue])
                res.product_option_value = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_products_id_variants_variant_id_json(self, request: operations.PutProductsIDVariantsVariantIDJSONRequest) -> operations.PutProductsIDVariantsVariantIDJSONResponse:
        r"""Modify an existing Product Variant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{id}/variants/{variant_id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProductsIDVariantsVariantIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Variant])
                res.variant = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_products_product_id_fields_field_id_json(self, request: operations.PutProductsProductIDFieldsFieldIDJSONRequest) -> operations.PutProductsProductIDFieldsFieldIDJSONResponse:
        r"""Update value of Product Custom Field
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/products/{product_id}/fields/{field_id}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutProductsProductIDFieldsFieldIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductCustomField])
                res.product_custom_field = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_promotions_id_json(self, request: operations.PutPromotionsIDJSONRequest) -> operations.PutPromotionsIDJSONResponse:
        r"""Update a Promotion.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/promotions/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPromotionsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Promotion])
                res.promotion = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    
    def put_shipping_methods_id_json(self, request: operations.PutShippingMethodsIDJSONRequest) -> operations.PutShippingMethodsIDJSONResponse:
        r"""Update a Shipping Method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/shipping_methods/{id}.json", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutShippingMethodsIDJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShippingMethod])
                res.shipping_method = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.not_found = out

        return res

    