var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://hhs.gov/api/v2",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // GetResourcesCampaignsIdJson - Get Campaign by ID
    /**
     * Information about a specific campaign
    **/
    SDK.prototype.GetResourcesCampaignsIdJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesCampaignsIdJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/campaigns/{id}.json", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.campaignWrapped = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesCampaignsIdMediaJson - Get MediaItems by Campaign ID
    /**
     * Campaign Listings
    **/
    SDK.prototype.GetResourcesCampaignsIdMediaJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesCampaignsIdMediaJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/campaigns/{id}/media.json", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrapped = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesCampaignsIdSyndicateFormat - Get MediaItems for Campaign
    /**
     * MediaItem
    **/
    SDK.prototype.GetResourcesCampaignsIdSyndicateFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesCampaignsIdSyndicateFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/campaigns/{id}/syndicate.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.syndicateMarshallerWrapped = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesCampaignsJson - Get Campaigns
    /**
     * Media Listings for a specific campaign
    **/
    SDK.prototype.GetResourcesCampaignsJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesCampaignsJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resources/campaigns.json";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.campaignWrapped = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesJson - Get Resources by search query
    /**
     * Global search
    **/
    SDK.prototype.GetResourcesJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resources.json";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesLanguagesIdJson - Get Language by ID
    /**
     * Information about a specific language
    **/
    SDK.prototype.GetResourcesLanguagesIdJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesLanguagesIdJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/languages/{id}.json", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.languageWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesLanguagesJson - Get Languages
    /**
     * Language Listings
    **/
    SDK.prototype.GetResourcesLanguagesJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesLanguagesJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resources/languages.json";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.languageWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaTypesFormat - Get MediaTypes
    /**
     * Information about media types
    **/
    SDK.prototype.GetResourcesMediaTypesFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaTypesFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/mediaTypes.{format}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaTypeHolderWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaFeaturedJson - Get the list of featured content in the syndication system
    /**
     * Get the list of featured content in the syndication system
    **/
    SDK.prototype.GetResourcesMediaFeaturedJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaFeaturedJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resources/media/featured.json";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItems = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdContent - Get content for MediaItem
    /**
     * The actual media content (html, image, etc...)
    **/
    SDK.prototype.GetResourcesMediaIdContent = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdContentRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}/content", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getResourcesMediaIdContent200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdEmbedJson - Get embed code for MediaItem
    /**
     * Get the javascript or iframe embed code for this item (to embed it on a web page).
    **/
    SDK.prototype.GetResourcesMediaIdEmbedJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdEmbedJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}/embed.json", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getResourcesMediaIdEmbedJson200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdJson - Get MediaItem by ID
    /**
     * Information about a specific media item
    **/
    SDK.prototype.GetResourcesMediaIdJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}.json", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdPreviewJpg - Get Tag by ID
    /**
     * Get the jpg preview of the content item where applicable.
    **/
    SDK.prototype.GetResourcesMediaIdPreviewJpg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdPreviewJpgRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}/preview.jpg", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getResourcesMediaIdPreviewJpg200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdRelatedMediaFormat - Get related MediaItems by ID
    /**
     * Get the media related to the current media item.
    **/
    SDK.prototype.GetResourcesMediaIdRelatedMediaFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdRelatedMediaFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}/relatedMedia.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdSyndicateFormat - Get syndicated content for MediaItem
    /**
     * Get syndicated content.
    **/
    SDK.prototype.GetResourcesMediaIdSyndicateFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdSyndicateFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}/syndicate.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.syndicateMarshallerWrapped = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdThumbnailJpg - Get JPG thumbnail for MediaItem
    /**
     * Get the jpg thumbnail of the content item where applicable.
    **/
    SDK.prototype.GetResourcesMediaIdThumbnailJpg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdThumbnailJpgRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}/thumbnail.jpg", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getResourcesMediaIdThumbnailJpg200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaIdYoutubeMetaDataJson - Get Youtube metadata for MediaItem
    /**
     * Youtube meta-data for a video item.
    **/
    SDK.prototype.GetResourcesMediaIdYoutubeMetaDataJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaIdYoutubeMetaDataJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/{id}/youtubeMetaData.json", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getResourcesMediaIdYoutubeMetaDataJson200ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaJson - Get MediaItems
    /**
     * Media Items Listings
    **/
    SDK.prototype.GetResourcesMediaJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resources/media.json";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaMostPopularMediaFormat - Get MediaItems by popularity
    /**
     * Get the media with the highest ratings.
    **/
    SDK.prototype.GetResourcesMediaMostPopularMediaFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaMostPopularMediaFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/media/mostPopularMedia.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesMediaSearchResultsJson - Get MediaItems by search query
    /**
     * Full search
    **/
    SDK.prototype.GetResourcesMediaSearchResultsJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesMediaSearchResultsJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resources/media/searchResults.json";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesSourcesIdJson - Get Source by ID
    /**
     * Information about a specific source.
    **/
    SDK.prototype.GetResourcesSourcesIdJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesSourcesIdJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/sources/{id}.json", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.sourceWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesSourcesIdSyndicateFormat - Get MediaItems for Source
    /**
     * MediaItem
    **/
    SDK.prototype.GetResourcesSourcesIdSyndicateFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesSourcesIdSyndicateFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/sources/{id}/syndicate.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesSourcesJson - Get Sources
    /**
     * Source Listings
    **/
    SDK.prototype.GetResourcesSourcesJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesSourcesJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resources/sources.json";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.sourceWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesTagsFormat - Get Tags
    /**
     * List of Tags
    **/
    SDK.prototype.GetResourcesTagsFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesTagsFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/tags.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagMarshallerWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesTagsIdFormat - Get Tag by ID
    /**
     * Information about a specific tag
    **/
    SDK.prototype.GetResourcesTagsIdFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesTagsIdFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/tags/{id}.{format}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagMarshallerWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesTagsIdMediaFormat - Get MediaItems for Tag
    /**
     * MediaItem
    **/
    SDK.prototype.GetResourcesTagsIdMediaFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesTagsIdMediaFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/tags/{id}/media.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesTagsIdRelatedFormat - Get related Tags by ID
    /**
     * Information about related tags to a specific tag
    **/
    SDK.prototype.GetResourcesTagsIdRelatedFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesTagsIdRelatedFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/tags/{id}/related.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagMarshallerWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesTagsIdSyndicateFormat - Get MediaItems for Tag
    /**
     * MediaItem
    **/
    SDK.prototype.GetResourcesTagsIdSyndicateFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesTagsIdSyndicateFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/tags/{id}/syndicate.{format}", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getResourcesTagsIdSyndicateFormat200ApplicationJsonString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesTagsTagLanguagesFormat - Get TagLanguages
    /**
     * List of Tag Languages
    **/
    SDK.prototype.GetResourcesTagsTagLanguagesFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesTagsTagLanguagesFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/tags/tagLanguages.{format}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagLanguageMarshallerWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesTagsTagTypesFormat - Get MediaItems for Tag
    /**
     * List of Types
    **/
    SDK.prototype.GetResourcesTagsTagTypesFormat = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesTagsTagTypesFormatRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/tags/tagTypes.{format}", req.pathParams);
        var client = this.defaultClient;
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.tagTypeMarshallerWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourcesUserMediaListsIdJson - Get UserMediaList by ID
    /**
     * Get a specific user media list.
    **/
    SDK.prototype.GetResourcesUserMediaListsIdJson = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourcesUserMediaListsIdJsonRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resources/userMediaLists/{id}.json", req.pathParams);
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.mediaItemWrappeds = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
