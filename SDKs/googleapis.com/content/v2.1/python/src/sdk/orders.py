import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Orders:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def content_orders_acknowledge(self, request: operations.ContentOrdersAcknowledgeRequest) -> operations.ContentOrdersAcknowledgeResponse:
        r"""Marks an order as acknowledged.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/acknowledge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersAcknowledgeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersAcknowledgeResponse])
                res.orders_acknowledge_response = out

        return res

    
    def content_orders_advancetestorder(self, request: operations.ContentOrdersAdvancetestorderRequest) -> operations.ContentOrdersAdvancetestorderResponse:
        r"""Sandbox only. Moves a test order from state \"`inProgress`\" to state \"`pendingShipment`\".
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/testorders/{orderId}/advance", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersAdvancetestorderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersAdvanceTestOrderResponse])
                res.orders_advance_test_order_response = out

        return res

    
    def content_orders_cancel(self, request: operations.ContentOrdersCancelRequest) -> operations.ContentOrdersCancelResponse:
        r"""Cancels all line items in an order, making a full refund.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersCancelResponse])
                res.orders_cancel_response = out

        return res

    
    def content_orders_cancellineitem(self, request: operations.ContentOrdersCancellineitemRequest) -> operations.ContentOrdersCancellineitemResponse:
        r"""Cancels a line item, making a full refund.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/cancelLineItem", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersCancellineitemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersCancelLineItemResponse])
                res.orders_cancel_line_item_response = out

        return res

    
    def content_orders_canceltestorderbycustomer(self, request: operations.ContentOrdersCanceltestorderbycustomerRequest) -> operations.ContentOrdersCanceltestorderbycustomerResponse:
        r"""Sandbox only. Cancels a test order for customer-initiated cancellation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/testorders/{orderId}/cancelByCustomer", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersCanceltestorderbycustomerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersCancelTestOrderByCustomerResponse])
                res.orders_cancel_test_order_by_customer_response = out

        return res

    
    def content_orders_capture_order(self, request: operations.ContentOrdersCaptureOrderRequest) -> operations.ContentOrdersCaptureOrderResponse:
        r"""Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/captureOrder", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersCaptureOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CaptureOrderResponse])
                res.capture_order_response = out

        return res

    
    def content_orders_createtestorder(self, request: operations.ContentOrdersCreatetestorderRequest) -> operations.ContentOrdersCreatetestorderResponse:
        r"""Sandbox only. Creates a test order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/testorders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersCreatetestorderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersCreateTestOrderResponse])
                res.orders_create_test_order_response = out

        return res

    
    def content_orders_createtestreturn(self, request: operations.ContentOrdersCreatetestreturnRequest) -> operations.ContentOrdersCreatetestreturnResponse:
        r"""Sandbox only. Creates a test return.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/testreturn", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersCreatetestreturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersCreateTestReturnResponse])
                res.orders_create_test_return_response = out

        return res

    
    def content_orders_get(self, request: operations.ContentOrdersGetRequest) -> operations.ContentOrdersGetResponse:
        r"""Retrieves an order from your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Order])
                res.order = out

        return res

    
    def content_orders_getbymerchantorderid(self, request: operations.ContentOrdersGetbymerchantorderidRequest) -> operations.ContentOrdersGetbymerchantorderidResponse:
        r"""Retrieves an order using merchant order ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/ordersbymerchantid/{merchantOrderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersGetbymerchantorderidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersGetByMerchantOrderIDResponse])
                res.orders_get_by_merchant_order_id_response = out

        return res

    
    def content_orders_gettestordertemplate(self, request: operations.ContentOrdersGettestordertemplateRequest) -> operations.ContentOrdersGettestordertemplateResponse:
        r"""Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/testordertemplates/{templateName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersGettestordertemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersGetTestOrderTemplateResponse])
                res.orders_get_test_order_template_response = out

        return res

    
    def content_orders_instorerefundlineitem(self, request: operations.ContentOrdersInstorerefundlineitemRequest) -> operations.ContentOrdersInstorerefundlineitemResponse:
        r"""Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/inStoreRefundLineItem", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersInstorerefundlineitemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersInStoreRefundLineItemResponse])
                res.orders_in_store_refund_line_item_response = out

        return res

    
    def content_orders_list(self, request: operations.ContentOrdersListRequest) -> operations.ContentOrdersListResponse:
        r"""Lists the orders in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersListResponse])
                res.orders_list_response = out

        return res

    
    def content_orders_refunditem(self, request: operations.ContentOrdersRefunditemRequest) -> operations.ContentOrdersRefunditemResponse:
        r"""Issues a partial or total refund for items and shipment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/refunditem", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersRefunditemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersRefundItemResponse])
                res.orders_refund_item_response = out

        return res

    
    def content_orders_refundorder(self, request: operations.ContentOrdersRefundorderRequest) -> operations.ContentOrdersRefundorderResponse:
        r"""Issues a partial or total refund for an order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/refundorder", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersRefundorderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersRefundOrderResponse])
                res.orders_refund_order_response = out

        return res

    
    def content_orders_rejectreturnlineitem(self, request: operations.ContentOrdersRejectreturnlineitemRequest) -> operations.ContentOrdersRejectreturnlineitemResponse:
        r"""Rejects return on an line item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/rejectReturnLineItem", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersRejectreturnlineitemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersRejectReturnLineItemResponse])
                res.orders_reject_return_line_item_response = out

        return res

    
    def content_orders_returnrefundlineitem(self, request: operations.ContentOrdersReturnrefundlineitemRequest) -> operations.ContentOrdersReturnrefundlineitemResponse:
        r"""Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/returnRefundLineItem", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersReturnrefundlineitemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersReturnRefundLineItemResponse])
                res.orders_return_refund_line_item_response = out

        return res

    
    def content_orders_setlineitemmetadata(self, request: operations.ContentOrdersSetlineitemmetadataRequest) -> operations.ContentOrdersSetlineitemmetadataResponse:
        r"""Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/setLineItemMetadata", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersSetlineitemmetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersSetLineItemMetadataResponse])
                res.orders_set_line_item_metadata_response = out

        return res

    
    def content_orders_shiplineitems(self, request: operations.ContentOrdersShiplineitemsRequest) -> operations.ContentOrdersShiplineitemsResponse:
        r"""Marks line item(s) as shipped.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/shipLineItems", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersShiplineitemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersShipLineItemsResponse])
                res.orders_ship_line_items_response = out

        return res

    
    def content_orders_updatelineitemshippingdetails(self, request: operations.ContentOrdersUpdatelineitemshippingdetailsRequest) -> operations.ContentOrdersUpdatelineitemshippingdetailsResponse:
        r"""Updates ship by and delivery by dates for a line item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/updateLineItemShippingDetails", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersUpdatelineitemshippingdetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersUpdateLineItemShippingDetailsResponse])
                res.orders_update_line_item_shipping_details_response = out

        return res

    
    def content_orders_updatemerchantorderid(self, request: operations.ContentOrdersUpdatemerchantorderidRequest) -> operations.ContentOrdersUpdatemerchantorderidResponse:
        r"""Updates the merchant order ID for a given order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/updateMerchantOrderId", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersUpdatemerchantorderidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersUpdateMerchantOrderIDResponse])
                res.orders_update_merchant_order_id_response = out

        return res

    
    def content_orders_updateshipment(self, request: operations.ContentOrdersUpdateshipmentRequest) -> operations.ContentOrdersUpdateshipmentResponse:
        r"""Updates a shipment's status, carrier, and/or tracking ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/orders/{orderId}/updateShipment", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentOrdersUpdateshipmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrdersUpdateShipmentResponse])
                res.orders_update_shipment_response = out

        return res

    