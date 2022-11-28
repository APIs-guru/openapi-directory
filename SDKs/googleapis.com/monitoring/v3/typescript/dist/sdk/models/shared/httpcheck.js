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
import { ResponseStatusCode } from "./responsestatuscode";
import { BasicAuthentication } from "./basicauthentication";
import { PingConfig } from "./pingconfig";
export var HttpCheckContentTypeEnum;
(function (HttpCheckContentTypeEnum) {
    HttpCheckContentTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    HttpCheckContentTypeEnum["UrlEncoded"] = "URL_ENCODED";
})(HttpCheckContentTypeEnum || (HttpCheckContentTypeEnum = {}));
export var HttpCheckRequestMethodEnum;
(function (HttpCheckRequestMethodEnum) {
    HttpCheckRequestMethodEnum["MethodUnspecified"] = "METHOD_UNSPECIFIED";
    HttpCheckRequestMethodEnum["Get"] = "GET";
    HttpCheckRequestMethodEnum["Post"] = "POST";
})(HttpCheckRequestMethodEnum || (HttpCheckRequestMethodEnum = {}));
// HttpCheck
/**
 * Information involved in an HTTP/HTTPS Uptime check request.
**/
var HttpCheck = /** @class */ (function (_super) {
    __extends(HttpCheck, _super);
    function HttpCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptedResponseStatusCodes", elemType: ResponseStatusCode }),
        __metadata("design:type", Array)
    ], HttpCheck.prototype, "acceptedResponseStatusCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authInfo" }),
        __metadata("design:type", BasicAuthentication)
    ], HttpCheck.prototype, "authInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], HttpCheck.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], HttpCheck.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], HttpCheck.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maskHeaders" }),
        __metadata("design:type", Boolean)
    ], HttpCheck.prototype, "maskHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], HttpCheck.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pingConfig" }),
        __metadata("design:type", PingConfig)
    ], HttpCheck.prototype, "pingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], HttpCheck.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMethod" }),
        __metadata("design:type", String)
    ], HttpCheck.prototype, "requestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useSsl" }),
        __metadata("design:type", Boolean)
    ], HttpCheck.prototype, "useSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validateSsl" }),
        __metadata("design:type", Boolean)
    ], HttpCheck.prototype, "validateSsl", void 0);
    return HttpCheck;
}(SpeakeasyBase));
export { HttpCheck };
