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
import * as operations from "./models/operations";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
var Servers = [
    "https://apps.gov.bc.ca/pub/geomark",
    "https://test.apps.gov.bc.ca/pub/geomark",
    "https://delivery.apps.gov.bc.ca/pub/geomark",
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
// SDK Documentation: https://www2.gov.bc.ca/gov/content?id=F6BAF45131954020BCFD2EBCC456F084 - Geomark Web Service
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
    // GetGeomarksGeomarkIdBoundingBoxFileFormatExtension - Gets the bounding box of the geomark
    /**
     * The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
    **/
    SDK.prototype.GetGeomarksGeomarkIdBoundingBoxFileFormatExtension = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/geomarks/{geomarkId}/boundingBox.{fileFormatExtension}", req.pathParams);
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
                    break;
                case 400:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetGeomarksGeomarkIdFeatureFileFormatExtension - Get the feature and attribution of the geomark
    /**
     * The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
    **/
    SDK.prototype.GetGeomarksGeomarkIdFeatureFileFormatExtension = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/geomarks/{geomarkId}/feature.{fileFormatExtension}", req.pathParams);
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
                    break;
                case 400:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetGeomarksGeomarkIdFileFormatExtension - Get information about a particular geomark
    /**
     * The attribution can be downloaded as a info file format. The download files can then be processed by a client application to access the geomark info fields and to get the URLs to the geometry download resources.
    **/
    SDK.prototype.GetGeomarksGeomarkIdFileFormatExtension = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetGeomarksGeomarkIdFileFormatExtensionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/geomarks/{geomarkId}.{fileFormatExtension}", req.pathParams);
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
                    break;
                case 400:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetGeomarksGeomarkIdPartsFileFormatExtension - Get the individual geometries within a multi-part geometry
    /**
     * The geomark parts resource returns a one or more spatial features. One for each part of the Geomark's geomerty. Each part contains a single (Point, LineString, Polygon) geometry and the geomark attribution.
    **/
    SDK.prototype.GetGeomarksGeomarkIdPartsFileFormatExtension = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetGeomarksGeomarkIdPartsFileFormatExtensionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/geomarks/{geomarkId}/parts.{fileFormatExtension}", req.pathParams);
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
                    break;
                case 400:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetGeomarksGeomarkIdPointFileFormatExtension - Gets a single spatial point representative of the geomark.
    /**
     * The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
    **/
    SDK.prototype.GetGeomarksGeomarkIdPointFileFormatExtension = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetGeomarksGeomarkIdPointFileFormatExtensionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/geomarks/{geomarkId}/point.{fileFormatExtension}", req.pathParams);
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
                    break;
                case 400:
                    break;
                case 404:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostGeomarksCopy - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
    /**
     * The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
    **/
    SDK.prototype.PostGeomarksCopy = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostGeomarksCopyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/geomarks/copy";
        var client = this.defaultClient;
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .post(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 400:
                    break;
                case 500:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PostGeomarksNew - Create a new geomark
    /**
     * Create a new geomark from the geometries read from the 'body' parameter or file.
    **/
    SDK.prototype.PostGeomarksNew = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostGeomarksNewRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/geomarks/new";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 302:
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
