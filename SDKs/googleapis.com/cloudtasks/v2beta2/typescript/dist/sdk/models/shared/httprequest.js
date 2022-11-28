var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";
export var HttpRequestHttpMethodEnum;
(function (HttpRequestHttpMethodEnum) {
    HttpRequestHttpMethodEnum["HttpMethodUnspecified"] = "HTTP_METHOD_UNSPECIFIED";
    HttpRequestHttpMethodEnum["Post"] = "POST";
    HttpRequestHttpMethodEnum["Get"] = "GET";
    HttpRequestHttpMethodEnum["Head"] = "HEAD";
    HttpRequestHttpMethodEnum["Put"] = "PUT";
    HttpRequestHttpMethodEnum["Delete"] = "DELETE";
    HttpRequestHttpMethodEnum["Patch"] = "PATCH";
    HttpRequestHttpMethodEnum["Options"] = "OPTIONS";
})(HttpRequestHttpMethodEnum || (HttpRequestHttpMethodEnum = {}));
// HttpRequest
/**
 * HTTP request. The task will be pushed to the worker as an HTTP request. An HTTP request embodies a url, an http method, headers, body and authorization for the http task.
**/
var HttpRequest = /** @class */ (function (_super) {
    __extends(HttpRequest, _super);
    function HttpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], HttpRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthToken" }),
        __metadata("design:type", OAuthToken)
    ], HttpRequest.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidcToken" }),
        __metadata("design:type", OidcToken)
    ], HttpRequest.prototype, "oidcToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "url", void 0);
    return HttpRequest;
}(SpeakeasyBase));
export { HttpRequest };
