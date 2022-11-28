package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Projects struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProjects(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Projects {
	return &Projects{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
func (s *Projects) RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx context.Context, request operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest) (*operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{attributesConfig}:addCatalogAttribute", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaAttributesConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaAttributesConfig = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes - Removes all specified CatalogAttributes from the AttributesConfig.
func (s *Projects) RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes(ctx context.Context, request operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest) (*operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{attributesConfig}:batchRemoveCatalogAttributes", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute - Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
func (s *Projects) RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute(ctx context.Context, request operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest) (*operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{attributesConfig}:removeCatalogAttribute", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaAttributesConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaAttributesConfig = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute - Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
func (s *Projects) RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute(ctx context.Context, request operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest) (*operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{attributesConfig}:replaceCatalogAttribute", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaAttributesConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaAttributesConfig = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces - Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{product}:addFulfillmentPlaces", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventories - Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventories(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{product}:addLocalInventories", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsCreate - Creates a Product.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsCreate(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsCreateRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/products", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaProduct
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaProduct = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsImport - Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsImport(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsImportRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/products:import", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsList - Gets a list of Products.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsList(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsListRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/products", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaListProductsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaListProductsResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsPurge - Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsPurge(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/products:purge", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces - Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{product}:removeFulfillmentPlaces", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{product}:removeLocalInventories", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsBranchesProductsSetInventory - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsBranchesProductsSetInventory(ctx context.Context, request operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest) (*operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}:setInventory", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsCompleteQuery - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsCompleteQuery(ctx context.Context, request operations.RetailProjectsLocationsCatalogsCompleteQueryRequest) (*operations.RetailProjectsLocationsCatalogsCompleteQueryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{catalog}:completeQuery", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsCompleteQueryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaCompleteQueryResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaCompleteQueryResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsCompletionDataImport - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsCompletionDataImport(ctx context.Context, request operations.RetailProjectsLocationsCatalogsCompletionDataImportRequest) (*operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/completionData:import", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsCompletionDataImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsControlsCreate - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
func (s *Projects) RetailProjectsLocationsCatalogsControlsCreate(ctx context.Context, request operations.RetailProjectsLocationsCatalogsControlsCreateRequest) (*operations.RetailProjectsLocationsCatalogsControlsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/controls", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsControlsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaControl
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaControl = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsControlsList - Lists all Controls by their parent Catalog.
func (s *Projects) RetailProjectsLocationsCatalogsControlsList(ctx context.Context, request operations.RetailProjectsLocationsCatalogsControlsListRequest) (*operations.RetailProjectsLocationsCatalogsControlsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/controls", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsControlsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaListControlsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaListControlsResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsGetDefaultBranch - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
func (s *Projects) RetailProjectsLocationsCatalogsGetDefaultBranch(ctx context.Context, request operations.RetailProjectsLocationsCatalogsGetDefaultBranchRequest) (*operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{catalog}:getDefaultBranch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsGetDefaultBranchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaGetDefaultBranchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaGetDefaultBranchResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsList - Lists all the Catalogs associated with the project.
func (s *Projects) RetailProjectsLocationsCatalogsList(ctx context.Context, request operations.RetailProjectsLocationsCatalogsListRequest) (*operations.RetailProjectsLocationsCatalogsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/catalogs", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaListCatalogsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaListCatalogsResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsModelsCreate - Creates a new model.
func (s *Projects) RetailProjectsLocationsCatalogsModelsCreate(ctx context.Context, request operations.RetailProjectsLocationsCatalogsModelsCreateRequest) (*operations.RetailProjectsLocationsCatalogsModelsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/models", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsModelsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsModelsList - Lists all the models linked to this event store.
func (s *Projects) RetailProjectsLocationsCatalogsModelsList(ctx context.Context, request operations.RetailProjectsLocationsCatalogsModelsListRequest) (*operations.RetailProjectsLocationsCatalogsModelsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/models", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsModelsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaListModelsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaListModelsResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsModelsPause - Pauses the training of an existing model.
func (s *Projects) RetailProjectsLocationsCatalogsModelsPause(ctx context.Context, request operations.RetailProjectsLocationsCatalogsModelsPauseRequest) (*operations.RetailProjectsLocationsCatalogsModelsPauseResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}:pause", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsModelsPauseResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaModel = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsModelsResume - Resumes the training of an existing model.
func (s *Projects) RetailProjectsLocationsCatalogsModelsResume(ctx context.Context, request operations.RetailProjectsLocationsCatalogsModelsResumeRequest) (*operations.RetailProjectsLocationsCatalogsModelsResumeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}:resume", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsModelsResumeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaModel = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsModelsTune - Tunes an existing model.
func (s *Projects) RetailProjectsLocationsCatalogsModelsTune(ctx context.Context, request operations.RetailProjectsLocationsCatalogsModelsTuneRequest) (*operations.RetailProjectsLocationsCatalogsModelsTuneResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}:tune", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsModelsTuneResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsAddControl - Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsAddControl(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsAddControlRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{servingConfig}:addControl", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsAddControlResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaServingConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaServingConfig = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsCreate - Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsCreate(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsCreateRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/servingConfigs", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaServingConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaServingConfig = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsDelete - Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsDelete(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsDeleteRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsList - Lists all ServingConfigs linked to this catalog.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsList(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsListRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/servingConfigs", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaListServingConfigsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaListServingConfigsResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsPatch - Updates a ServingConfig.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsPatch(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsPatchRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaServingConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaServingConfig = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsPredict - Makes a recommendation prediction.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsPredict(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsPredictRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{placement}:predict", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsPredictResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaPredictResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaPredictResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsRemoveControl - Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsRemoveControl(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{servingConfig}:removeControl", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaServingConfig
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaServingConfig = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsServingConfigsSearch - Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
func (s *Projects) RetailProjectsLocationsCatalogsServingConfigsSearch(ctx context.Context, request operations.RetailProjectsLocationsCatalogsServingConfigsSearchRequest) (*operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{placement}:search", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsServingConfigsSearchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaSearchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaSearchResponse = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsSetDefaultBranch - Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
func (s *Projects) RetailProjectsLocationsCatalogsSetDefaultBranch(ctx context.Context, request operations.RetailProjectsLocationsCatalogsSetDefaultBranchRequest) (*operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{catalog}:setDefaultBranch", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsSetDefaultBranchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsUserEventsCollect - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
func (s *Projects) RetailProjectsLocationsCatalogsUserEventsCollect(ctx context.Context, request operations.RetailProjectsLocationsCatalogsUserEventsCollectRequest) (*operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/userEvents:collect", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsUserEventsCollectResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAPIHTTPBody
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAPIHTTPBody = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsUserEventsImport - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
func (s *Projects) RetailProjectsLocationsCatalogsUserEventsImport(ctx context.Context, request operations.RetailProjectsLocationsCatalogsUserEventsImportRequest) (*operations.RetailProjectsLocationsCatalogsUserEventsImportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/userEvents:import", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsUserEventsImportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsUserEventsPurge - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
func (s *Projects) RetailProjectsLocationsCatalogsUserEventsPurge(ctx context.Context, request operations.RetailProjectsLocationsCatalogsUserEventsPurgeRequest) (*operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/userEvents:purge", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsUserEventsPurgeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsUserEventsRejoin - Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
func (s *Projects) RetailProjectsLocationsCatalogsUserEventsRejoin(ctx context.Context, request operations.RetailProjectsLocationsCatalogsUserEventsRejoinRequest) (*operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/userEvents:rejoin", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsUserEventsRejoinResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsLocationsCatalogsUserEventsWrite - Writes a single user event.
func (s *Projects) RetailProjectsLocationsCatalogsUserEventsWrite(ctx context.Context, request operations.RetailProjectsLocationsCatalogsUserEventsWriteRequest) (*operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{parent}/userEvents:write", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsLocationsCatalogsUserEventsWriteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleCloudRetailV2alphaUserEvent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleCloudRetailV2alphaUserEvent = out
		}
	}

	return res, nil
}

// RetailProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
func (s *Projects) RetailProjectsOperationsGet(ctx context.Context, request operations.RetailProjectsOperationsGetRequest) (*operations.RetailProjectsOperationsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsOperationsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningOperation = out
		}
	}

	return res, nil
}

// RetailProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
func (s *Projects) RetailProjectsOperationsList(ctx context.Context, request operations.RetailProjectsOperationsListRequest) (*operations.RetailProjectsOperationsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2alpha/{name}/operations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetailProjectsOperationsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleLongrunningListOperationsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleLongrunningListOperationsResponse = out
		}
	}

	return res, nil
}
